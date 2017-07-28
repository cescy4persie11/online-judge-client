const redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;



module.exports = function(io) {

    const collaborations = {};

    const socketIdToSessionId = {};

    //for redis
    const sessionPath = '/ojserver/';

    io.on('connection', (socket) => {
        //console.log(socket);
        const sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;

        // if (!(sessionId in collaborations)) {
        //     collaborations[sessionId] = {
        //         'participants' : []
        //     };
        // }
        if (sessionId in collaborations) {
            // there are people in collaboration
            collaborations[sessionId]['participants'].push(socket.id);
        } else {
            redisClient.get(sessionPath + sessionId, function(data) {
                if (data) {
                    console.log('you have been here before, left some data');
                    collaborations[sessionId] = {
                        'cacheInstructions' : JSON.parse(data),
                        'participants' : []
                    }

                } else {
                    // you are the first one getting the data from redis
                    console.log('no one has been here before');
                    collaborations[sessionId] = {
                        'cachedInstructions': [],
                        'participants' : []
                    }
                }
                collaborations[sessionId]['participants'].push[socket.id];
            });
        }

        // cursor move listeners
        socket.on('cursorMove', (cursor) => {
            console.log('change' + socketIdToSessionId[socket.id] + ' ' + cursor);
            cursor = JSON.parse(cursor);
            cursor['socketId'] = socket.id;
            forwardEvent(socket.id, 'cursorMove', JSON.stringify(cursor));
        })

        // change event listeners
        socket.on('change', delta => {
            console.log('change' + socketIdToSessionId[socket.id] + ' ' + delta);
            const sessionId = socketIdToSessionId[socket.id];
            if (sessionId in collaborations) {
                collaborations[sessionId]['cachedInstructions'].push(
                    ['change', delta, Date.now()]
                );
            }
            
            forwardEvent(socket.id, 'change', delta);
        });

        socket.on('restoreBuffer', () => {
            const sessionId = socketIdToSessionId[socket.id];
            if (sessionId in collaborations) {
                const cachedInstructions = collaborations[sessionId]['cachedInstructions'];
                for (let instr of cachedInstructions) {
                    socket.emit(instr[0], instr[1]);
                }
            } else {
                console.log('WARNING');
            }
        });

        socket.on('disconnect', () => {
            const sessionId = socketIdToSessionId[socket.id];
            let foundAndRemove = false;
            if ( sessionId in collaborations) {
                const participants = collaborations[sessionId]['participants'];
                const index = participants.indexOf[socket.id];
                if (index > 0) {
                    participants.splice(index, 1);
                    foundAndRemove = true;

                    if (participants.length === 0) {
                        const key = sessionPath + sessionId;
                        const value = JSON.stringify(collaborations[sessionId]['cachedInstructions']);

                        redisClient.set(key, value, redisClient.redisPrint);
                        redisClient.expire(key, TIME_IN_SECONDS);
                        delete collaborations[sessionId];
                    }
                }
            } else {
                console.log("Warning");
            }

            if (!foundAndRemove) {
                console.log("Error");
            }

        });

    });

    const forwardEvent = function(socketId, eventName, dataString) {
        const sessionId = socketIdToSessionId[socketId];
            if (sessionId in collaborations) {
                const participants = collaborations[sessionId]['participants'];
                for (let item of participants) {
                    if (socketId != item) {
                        io.to(item).emit(eventName, dataString);
                    }
                }
            } else {
                console.log('You have a bug');
            }
    }
}

