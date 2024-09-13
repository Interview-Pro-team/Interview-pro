from flask import Flask, request, jsonify
import whisper
import os

app = Flask(__name__)

# Load the Whisper model
model = whisper.load_model("base")

@app.route('/convert', methods=['POST'])
def convert_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    file_path = 'temp_audio.wav'
    file.save(file_path)

    # Transcribe the audio using Whisper
    result = model.transcribe(file_path)

    # Clean up the temporary audio file
    os.remove(file_path)

    return jsonify({'text': result['text']})

if __name__ == '__main__':
    app.run(debug=True)
