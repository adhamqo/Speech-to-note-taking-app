import { StreamlitComponentBase, withStreamlitConnection } from "streamlit-component-lib";
import React from "react";
import AudioComponent from "./audio_component";

class MyAudioComponent extends StreamlitComponentBase {
    render() {
        return <AudioComponent setStreamlitState={this.props.streamlit.setComponentValue} />;
    }
}

export default withStreamlitConnection(MyAudioComponent);
