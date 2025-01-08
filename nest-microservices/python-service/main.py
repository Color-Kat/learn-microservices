from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
  return 'Bonjur, I am Python microservice! I response using HTTP.'

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    # Пример обработки данных
    df = pd.DataFrame(data)
    response = df.to_dict(orient='records')
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3003)