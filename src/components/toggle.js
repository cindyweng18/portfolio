// Code adapted from: kalyada | Anime.JS
// Code available at: https://codepen.io/kLeosrisook/pen/VweNjrV
import React, { useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../styles.css';


function Toggle() {
    let switched = false;
    const faceRef = useRef(null);
    const switchBGRef = useRef(null);
    
    const switchToggle = () => {
        const background = document.querySelector("body");
        const face = faceRef.current;
        const switchBG = switchBGRef.current;
        
        var tl = anime.timeline({
            easing: "easeOutExpo",
            duration: 1050
        });

        tl.add({
            targets: [face],
            translateX: switched ? -1 : 35,
            rotate: switched ? -360 : 360,
            backgroundColor: switched ? "rgb(255,255,255)" : "rgb(34,34,34)"}, 500)
            .add({
                targets: [background],
                backgroundColor: switched ? "rgb(255, 255, 255)" : "rgb(34,34,34)" },500)
            .add({
                targets: [switchBG],
                backgroundColor: switched ? "rgb(34,34,34)" : "rgb(255, 255, 255)" },500);
        if (switched === true) {
            if (switchBG.classList.contains("on-shadow")) {
                switchBG.classList.remove("on-shadow");
            }
            switchBG.classList.add("off-shadow");
            switched = false;
            } else {
                if (switchBG.classList.contains("off-shadow")) {
                    switchBG.classList.remove("off-shadow");
                }
                switchBG.classList.add("on-shadow");
                switched = true;
            }
    }
        return(
            <>
            <div className="container">
                <div className="switch-background off-shadow" ref={switchBGRef}>
                    <div className="innerSwitch" onClick={switchToggle}  ref={faceRef}>
                        <svg width="100" height="100" viewBox="-5 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="face">
                        <path className="light-dark" fill="black" d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                        </svg>
                    </div>
                </div>
          </div>
          </>
        )
}

export default Toggle;