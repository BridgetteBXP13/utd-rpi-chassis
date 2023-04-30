import React from 'react';
import '../styles/present.css';
import Form from '../components/Form';
//import angled from "../assets/car1.jpg";
//import front from "../assets/car2.jpg";
//import side from "../assets/car3.jpg";
import bannerEV from "../assets/bannerEV.jpg";
import maybe from "../assets/maybebanner.jpg";
import idea1 from "../assets/chassisrough3.jpg";
import idea2 from "../assets/chassisrough1.jpg";
//import idea3 from "../assets/chassisrough3.jpg";
import vending from "../assets/chassisrough2.jpg";
import show1 from "../assets/show1.jpg";
import show2 from "../assets/show2.jpg";
import show3 from "../assets/show3.jpg";
import show4 from "../assets/show4.jpg";
import group from "../assets/group.jpg";
//import objdet from "../assets/rpi_chassis_robot.mp4";

import showcasing from "../assets/bridgenRo.jpg";


function present() {
    return (
        <div>
            
            <div className="title" style={{ backgroundImage: `url(${maybe})` }}>
                <h1>Presentation</h1>
            </div>
            
            <div className='title'>
            <iframe src="https://drive.google.com/file/d/1ORa2-39IqrzZq5AUhsJ1BZz6pEvTwy12/preview" width="640" height="480" allow="autoplay"></iframe>
            </div> 

            <div className='paragraph1'>
                <img src = {idea2} alt='ichassis100 mobile directory idea'/>
                <div className='paragraph1-text'>
                    <p>Our team promptly commenced brainstorming and identified several potential use cases that autonomous vehicles could offer. We presented the top five ideas, including Security Patrol Unit, Mobile Vending Machine, Package Delivery, Mobile Directory (shown on the left), and Mobile Utilities (shown below). </p>
                    <p>After evaluating all the ideas, we unanimously agreed on the Mobile Utilities concept and decided to proceed with it. Initially, Mobile Utilities encompassed a wide range of amenities, such as electronic chargers, gasoline, vacuum, tire repair kits, jumper cables, emergency contact to authorities, and more. The fundamental concept was to have an autonomous vehicle equipped with utilities that could be beneficial in a parking lot setting. </p>
                </div>
            </div>


            <div className='paragraph2'>
                <div className='paragraph2-text' >
                    <p>After considering various ideas, we realized that EV charging poses certain challenges, particularly the issue of busy and congested charging stations. To address this challenge, we came up with a novel concept of a Mobile EV Charging Station. </p>
                    <p>The proposed solution involved deploying autonomous vehicles at parking lots. EV vehicle owners could request an autonomous vehicle equipped with an overhead EV charger via an online interface. The autonomous vehicle would then navigate to the location of the customer's vehicle, ready to charge their EV. This approach solves the problem of limited EV charge ports at popular locations such as shopping malls and marketplaces.</p>
                </div>
                <img src = {idea1} alt='ichassis100 mobile utilities idea'/>
            </div>


            <div className="EV" style={{ backgroundImage: `url(${bannerEV})` }}>
               <p>Our idea had EVolved.</p> 
            </div>


            <div className='paragraph3'>
                <img src = {vending} alt='iChassis100 rendered vending machine'/>
                <div className='paragraph3-text'>
                    <p>We had finally arrived at a practical idea that could offer tangible value to our society, especially in the context of the ever-growing market for EVs.</p>
                    <p>However, we recognized that bringing this idea to fruition would require significant resources and time, as it involved teams of engineers and years of development. Therefore, we decided to focus on an aspect of the idea that we felt we could execute efficiently. Since we were all interested in artificial intelligence, we set out to create our own autonomous vehicle and incorporate the ability for it to drive to a specific location in a parking lot autonomously. This would require building a raspberry pi autonomous vehicle, the RPi-Chassis. By navigating safely through a parking lot to the designated locations. Consequently, our hardware and obstacle detection team took on the challenge. </p>
                    <p>We had split up into 3 primary teams: 
                        Hardware and Object-Detection, including Bridgette and Wyatt. 
                        Navigation including Justin and Noah. 
                        Front-End including Fernando and Dan.</p>
                </div>
            </div>


            <div className='paragraph4'>
                <img src = {showcasing} alt='Bridgette with Ro Bert'/>
                <div className='paragraph4-text'>
                    <p>We wasted no time and promptly compiled a list of the required parts, which we ordered immediately. Fortunately, one of our team members, Bridgette, had previous experience building Raspberry Pi cars, which proved beneficial. She knew precisely what components we needed and where potential issues might arise. In anticipation of unforeseen circumstances, we ordered additional parts such as external antennas and batteries. Once the parts arrived, Bridgette spearheaded the construction of the RPi chassis, with the team's full support. Below is a comprehensive list of the components we employed: </p>
                    <p><a href="https://docs.google.com/spreadsheets/d/1tm3lPVVQ9qCBv7gOGHLOpW0cvU83FtqpZ8IdkWLmLEo/edit#gid=0" target='_blank' rel='noreferrer'>List of parts we ordered to build the RPi Chassis.</a></p>
                    <p>Once we completed the chassis construction, our focus shifted to developing object detection and navigation capabilities for the car, which proved to be the most challenging part of the project.</p>
                    <p>To do the Object Detection we used a TensorLite pretrained model and ultrasonic sensors. The TensorLite model can detect objects, allowing the Rpi Chassis to avoid cars and people. The ultrasonic sensor was used for extra security in case something quickly gets in front of the robot before the camera can pick up on it.​ </p>
                    <p> Unfortunately, we had to reassess our goals when we realized that achieving navigation was not as feasible as we had initially anticipated. The primary obstacle was the limited antenna and signal strength, which prevented us from obtaining GPS coordinates with the required level of accuracy. Initially, we had intended to use the input form at the bottom of the webpage to send a coordinate location to a designated parking spot in the lot, such as H12. Although we retained the form on the webpage for documentation purposes, we had to reconsider our situation but were still determined to enable the car to locate a parking spot independently.
                    </p>
                </div>
            </div>

            <div className= 'welcoming'>
                <h1>Presenting the newest UTD Autonomous Vehicle:</h1>
                <h1> Ro Bert</h1>
            </div>


            <div className='picturegrid'>
                <img src = {show1} alt='first'/>
                <img src = {show2} alt='second'/>
                <img src = {show3} alt='third'/>
                <img src = {show4} alt='four'/>
            </div>


            <div className='undergrid'>
                <p> We opted to hard code the RPi chassis with instructions to direct it to the designated "parking spot". As a result, we shifted our focus to perfecting object detection to ensure that the car knew when to stop. This was a crucial step, as safety is paramount in the operation of an autonomous vehicle.  We conducted numerous test runs to ensure that the object detection system was functioning seamlessly. During testing, we encountered coding issues that resulted in the car crashing, despite our efforts to fix them. After several trial and error attempts, we discovered that our code was accurate, but we had not taken into account the sensor positions. Originally, we had been testing object detection using our foot or a nearby broom, which became our unofficial 7th team member due to its frequent use. However, we soon realized that the sensors were functioning correctly and the problem was with the objects we were using for testing, as they did not optimally utilize the sensor range. Once we finalized our adjustments Ro Bert was able to detect humans and stop at a safe distance as shown on the video on the right.   </p>

            </div>

            <div className='groupPic'>
                <img src = {group} alt='all members of team'/>
            </div>

            <div className='undergroup'>
                <p> At the outset of the project, we were highly optimistic about our ability to achieve our objectives to the fullest extent. However, we soon realized that things don't always go as planned. Consequently, we had to make significant changes to our original approach to still achieve our ultimate aim of creating an autonomous vehicle that could navigate a parking lot safely. Through this experience, we gained a greater appreciation for the project development process. Each team member focused on a different aspect of the project, and in the end, we produced a demo that we were all proud of. </p>
            </div>




            {/* adding <Form/> here imports the Form from the Form.js file and makes it display on the "present" page */}
            <div className='formTitle'>
                <h3>Enter coordinates using following format: </h3>
            </div>

            <div>
            <Form/>
            </div>

        </div>
    )
}

export default present