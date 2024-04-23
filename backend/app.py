from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Namaste Duniya!'

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' in request.files:
        image_file = request.files['image']
        image_file.save('uploaded_image.jpg')
        return 'Image uploaded successfully', 200
    else:
        return 'No image found in request', 400

@app.route('/getoutput/')
def get_output():
    return 'Output'

if __name__ == '__main__':
    app.run(debug=True)
