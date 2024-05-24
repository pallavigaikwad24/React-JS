import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./cameraStyle.css";

function CameraOnOff() {
  const webCamRef = useRef(null);
  const [flag, setFlag] = useState(false);
 
  function toggleCamera() {
    setFlag(!flag);
  };

  return (
    <>
      <div id="cameraMain">
        <div id="cameraArea">
          {flag ? (
            <Webcam
              audio={false}
              ref={webCamRef}
              screenshotFormat="image/jpeg"
              id="camera"
            /> 
          ) : (
            <img src="https://preview.redd.it/1iewg3rme8d61.png?width=1219&format=png&auto=webp&s=91b3296fcb07d98c9e8724cc091bd4994477293d" alt="pic" />
          )}
        </div>
        <button
          onClick={toggleCamera}
          id="cameraBtn"
          style={
            !flag ? { backgroundColor: "rgb(8, 187, 8)" } : { backgroundColor: "red" }
          }
        >
          {!flag ? "Start Video Call" : "Disconnect Call"}
        </button>
      </div>
    </>
  );
}

export default CameraOnOff;
