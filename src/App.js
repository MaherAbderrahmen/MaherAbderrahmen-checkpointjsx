import React from 'react';
import './App.css';
import './style.css';
import image from './css.png';

function App() {
  return (
    <div className="App">
      <div style={{border: "solid 1px black", maxWidth: "100vw"}}>
      <h1 className="title red">Web dev</h1>
      <br ></br>

 <img src="/html.png" alt= "HTML" className="picture" />

 <br ></br>

 <img src={image} alt= "CSS" className="picture" />
      </div>
      <video width="320" height="240" controls className="video">

 <source src="myVideo.mp4" type="video/mp4" />
</video>


    </div>
  );
}

export default App;
