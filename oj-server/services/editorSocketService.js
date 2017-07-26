module.exports = function(io) {

    const collaborations = [];

    const socketIdToSessionId = {};

    io.on('connection', (socket) => {
        //console.log(socket);
        const sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;

        if (!(sessionId in collaborations)) {
            collaborations[sessionId] = {
                'participants' : []
            }
        }

        collaborations[sessionId]['participants'].push(socket.id);

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
            // const sessionId = socketIdToSessionId[socket.id];
            // if (sessionId in collaborations) {
            //     const participants = collaborations[sessionId]['participants'];
            //     for (let item of participants) {
            //         if (socket.id != item) {
            //             io.to(item).emit('change', delta);
            //         }
            //     }
            // } else {
            //     console.log('You have a bug');
            // }
            forwardEvent(socket.id, 'change', delta);
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

