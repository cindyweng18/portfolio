import React, { Component } from 'react';
import '../styles.css';

export default class About extends Component {
    render(){
        return (
            <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0"> Cindy 
                    <span className="text-primary"> Browning</span>
                </h1>
                <div className="subheading mb-5">
                    Albany, NY, 12203 · (646) 479-4588 ·
                    <a href="mailto:cindybrowning18@gmail.com"> cindybrowning18@gmail.com</a>
                </div>
                <p className="lead mb-5">I’m currently a manager at a dental office, where I’ve worked for five years, assisting with patient care, appointment scheduling, and insurance policies. While this role isn’t aligned with my long-term goals, it has improved my communication, problem-solving, leadership, and interpersonal skills. I hold a Bachelor’s degree in Computer Science and previously, as a software engineer intern, I gained experience with Python and databases, optimizing ETL pipelines. I aim to transition into a software engineer or data scientist role, particularly in healthcare-focused companies.</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/cindybrowning18/" target="_blank" rel="noopener noreferrer"> <i className="bi bi-linkedin"></i> </a>
                    <a className="social-icon" href="https://github.com/cindyweng18" target="_blank" rel="noopener noreferrer"> <i className="bi bi-github"></i> </a>
                    <a className="social-icon" href="https://drive.google.com/file/d/1yJY-prwVJacRBEPe8glgqtSTVshO0Cyd/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <i class="bi bi-file-earmark-text-fill"></i> </a>
                </div>
            </div>
        </section>
        )
     }
}
