import React from 'react';
import './styles.css';
import Nav from './components/nav.js';
import About from './components/about.js';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function App() {
  return (
    <>
    <Nav> </Nav>

    <div class="container-fluid p-0">
        <About> </About>
        <hr class="m-0" />
        <Projects> </Projects>
        <hr class="m-0" />
        <Experience> </Experience>
        <hr class="m-0" />
        <Education> </Education>
        <hr class="m-0" />
        <Skills> </Skills>
    </div>
    </>
  );
}

export default App;
