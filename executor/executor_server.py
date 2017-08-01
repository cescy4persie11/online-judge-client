import executor_utils as eu
import json
from flask import Flask
from flask import jsonify
from flask import request


app = Flask(__name__)

@app.route('/')

@app.route('/build_and_run', methods=['POST'])

def build_and_run():
    print("dbug")
    data = json.loads(request.data)
    if 'code' not in data or 'lang' not in data:
        return 'invalid data received, not data or language set'
    print("dbug")

    code = data['code']
    lang = data['lang']

    print('API got called with code %s in %s' % (code, lang))
    #return jsonify({'build': 'build from flask', 'run': 'hello from flask'})
    result = eu.build_and_run(code, lang)
    return jsonify(result)

if __name__ == '__main__':
    eu.load_image()
    app.run(debug=True)