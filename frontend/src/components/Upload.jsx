import React from "react";
import Webcam from "react-webcam";

function Upload() {
  const WebcamComponent = () => <Webcam />;
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);
  return (
    <>
      <Webcam />
      <button onClick={capture}> Capture photo </button>
    </>
  );
}

export default Upload;
