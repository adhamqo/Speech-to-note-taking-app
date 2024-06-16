import React, { useState } from "react";

const AudioComponent = ({ setStreamlitState }) => {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const recorder = new MediaRecorder(stream);
                recorder.ondataavailable = handleDataAvailable;
                recorder.start();
                setMediaRecorder(recorder);
                setRecording(true);
            });
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
        }
    };

    const handleDataAvailable = (event) => {
        if (event.data.size > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                // Convert audio blob to base64
                const base64AudioMessage = reader.result.toString().split(',')[1];
                setStreamlitState({ base64Audio: base64AudioMessage });
            };
            reader.readAsDataURL(event.data);
        }
    };

    return (
        <div>
            {recording ? (
                <button onClick={stopRecording}>Stop Recording</button>
            ) : (
                <button onClick={startRecording}>Start Recording</button>
            )}
        </div>
    );
};

export default AudioComponent;
