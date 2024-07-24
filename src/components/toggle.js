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
        // const face = document.querySelector(".innerSwitch");
        // alert(faceElement[0].getBoundingClientRect().x)
        // const switchBG = document.querySelector(".switch-background");
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
            <div class="container">
                <div class="switch-background off-shadow" ref={switchBGRef}>
                    <div class="innerSwitch" onClick={switchToggle}  ref={faceRef}>
                        <svg width="100" height="100" viewBox="0 0 208 31" fill="none" xmlns="http://www.w3.org/2000/svg" class="face">
                        </svg>
                    </div>
                </div>
          </div>
          </>
        )
}

export default Toggle;