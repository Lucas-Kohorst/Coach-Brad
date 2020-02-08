import React from "react";
import { render } from "react-dom";
import VideoRecorder from "react-video-recorder";

function VideoRecorderView() {
  return render(
    <div>
    <VideoRecorder
      onRecordingComplete={videoBlob => {
        // Do something with the video...
        console.log("videoBlob", videoBlob);
      }}
    />
    </div>
  );
}

export { VideoRecorderView };
