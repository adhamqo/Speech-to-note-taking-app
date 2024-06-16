# Speech-to-Text Note-Taking Application

## Overview

This Speech-to-Text Note-Taking Application is designed for educational purposes, converting spoken language into text with high precision and efficiency. The application supports various audio input formats including real-time microphone recordings, file uploads, and YouTube video URLs. It utilizes advanced models like Wav2Vec2 and HuBERT for transcription, T5 for punctuation correction and summarization, and incorporates speaker diarization. Built with Streamlit, the application offers a dynamic and interactive user experience.

## Features

- **Advanced Transcription Models**: Utilizes Wav2Vec2 and HuBERT for accurate transcription.
- **Automatic Punctuation and Summarization**: Uses T5 models for punctuation correction and summarization.
- **Speaker Diarization**: Identifies and separates different speakers in audio recordings.
- **User-Friendly Interface**: Built with Streamlit for an interactive and customizable user experience.
- **Multiple Audio Input Formats**: Supports real-time microphone input, file uploads, and YouTube video URLs.

## Installation

### Prerequisites

- Python 3.7 or higher
- Pip (Python package installer)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/speech-to-text-note-taking-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd speech-to-text-note-taking-app
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   streamlit run app.py
   ```

## Usage

Once the application is running, you can access it through your web browser. The main interface provides options to:

- **Record in Real-Time**: Use your microphone to capture audio and convert it to text.
- **Upload Audio Files**: Upload audio files for transcription.
- **Use YouTube Links**: Provide YouTube video URLs for transcription.

You can also customize settings for transcription, punctuation, and summarization to suit your needs.

## Project Structure

- `app.py`: Main application script.
- `requirements.txt`: List of dependencies required to run the application.
- `README.md`: Project description and usage instructions.
- `LICENSE`: License information.

## Contribution

We welcome contributions to improve the application. Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please open an issue or contact us through the GitHub repository.

