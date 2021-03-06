import React from 'react';
import {Link} from 'react-router-dom';
import BgMusic from '@react-element/bg-music';
import sound from './bg_sound.mp3';
import '../../App.css';
import './Home.css';
import './Button.css';

let audio = new Audio("https://freesound.org/data/previews/506/506053_10991815-lq.mp3")

  const start = () => {
    audio.play()
  }

const Home = () => (

      <div className="main">
          <span className="webdev">Play  
            <span>&nbsp;Some</span>
            <span>&nbsp;With</span>
            </span>
            <span className="socod">Music</span>
          
          <h3 className="hideGame"><Link to="/">Home</Link></h3>
          <h3 ><Link id="btn-game" to="map" onClick={start} >Start Game</Link></h3>
          <div>
            <BgMusic
            src={sound}/>
          </div>
        </div>
 )

 export default Home;