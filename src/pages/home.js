import React from 'react'
import Banner from "../assets/show1.jpg";
import one from "../assets/car1.jpg"
import thousand from "../assets/car3.jpg"
//import objdet from "../assets/rpi_chassis_robot.mp4";

//import { Link } from "react-router-dom";
import '../styles/home.css';

function home() {
  return (

    <div>

      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>

        <div className="headerContainer" >
          <h1>RoBert</h1>
          <p>Autonomous Raspberry Pi Vehicle</p>
          {}
          {/*this method of linking works,  */}
          <a href='https://github.com/AutonomousiChassis/autonomous-ichassis' target='_blank' rel='noreferrer'>
          <button> RoBert's Github </button>
          </a>
        </div>
        
      </div>

          
            <div className='seperator'>
            <p>A Leader in Autonomous Vehicles at UTD</p>
            </div>

            <div className='title'>
             


<iframe src="https://drive.google.com/file/d/1ORa2-39IqrzZq5AUhsJ1BZz6pEvTwy12/preview" width="640" height="480" allow="autoplay"></iframe>
            </div> 

            <div className='sep'>
              <p>Self-driving cars like RoBert can revolutionize society. Improving productivity, customer service, and workplace safety in various business industries.</p>
            </div>

            <div className='hundred'>
            <img src = {one} alt='ichassis100'/>
            <p>For this project we used a Raspberry Pi to create a small robot that routes its own path and uses image classification and sensors to detect objects in its way. This is to simulate a possible use for an autonomous vehicle: mobile EV charging.  This project had a focus on the autonomous driving aspects such as object detection, navigation, and web application. With these combined the Rpi Chassis can autonomously move to a requested locations based on an internal map used to traverse a known location.</p>
            </div>


            <div className='thousand'>
            <img src = {thousand} alt='ichassis1k'/>
            <p>This demonstrates one of the many implementations possible with autonomous driving that could be translated to a larger scale vehicle. This demonstrates possibilities in autonomous driving, even using Tensor Lite and limited hardware. As well as the feasibility for future vehicle manufacturers integrate autonomous driving in their products.​</p>
            
            </div>

            <div className='chassis'>
              <p> RoBert is also known as RPi-Chassis.</p>
            </div>
            


    </div>
    
  )
}

export default home