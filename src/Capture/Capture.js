import React, {Component} from 'react';
import './capture.scss';

class Capture extends Component {
  constructor(props){
    super(props);
      this.state = {
        constraints: { audio: true, video: { width: 1280, height: 720 } },

      } 
  }

  componentDidMount() {
    // Prefer camera resolution nearest to 1280x720.
    // navigator.mediaDevices.getUserMedia(this.state.constraints)
    // .then(function(mediaStream) {
    //   let video = document.querySelector('video');
    //   video.srcObject = mediaStream;
    //   video.onloadedmetadata = function(e) {
    //     video.play();
    //   };
    // })
    // .catch(function(err) { console.log(err.name + ": " + err.message); });
  }

  render(){
    return (
      <div className="capture-container">
        <div className="camera">
          <video id="video"></video>
        </div>
        <canvas id="canvas">
        </canvas>
        <div className="output">
          <img id="photo" /> 
        </div>


      </div>
    )
  }
}

export default Capture;