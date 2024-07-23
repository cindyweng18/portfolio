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
                {/* <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p> */}
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/cindybrowning18/"> <i className="bi bi-linkedin"></i> </a>
                    <a className="social-icon" href="https://github.com/cindyweng18"> <i className="bi bi-github"></i> </a>
                </div>
            </div>
        </section>
        )
     }
}