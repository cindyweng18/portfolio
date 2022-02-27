import React, { Component } from 'react';
import '../styles.css';

export default class Experience extends Component {
    render() {
        return (
            <section class="resume-section" id="experience">
            <div class="resume-section-content reveal">
                <h2 class="mb-5">Experience</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Tarifica</h3>
                        <div class="subheading mb-3">Software Engineer Intern</div>
                        <p> Responsible for building and managing data gathering scrapers, APIs in Python-based environment and using SQL. Optimized the performance of web-scrapers-apps by continuous maintenance and troubleshoot. Create a program using Google Sheets, APIs, PostgreSQL Databases, and Python to inform developers and analysts about any web-scrapers-apps errors</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">February 2020 - July 2020</span></div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Manhattan Dentistry NYC PC</h3>
                        <div class="subheading mb-3">Dental Assistant</div>
                        <p>Ensure that all orthodontic instruments and equipment are properly sterilized before each use. Removing and replacing wires, coils, and elastic bands. Take intraoral’s X-rays of patients’ mouthsTake intraoral’s X-rays of patients’ mouths. Assist the dentist during any procedures and treatments.</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">December 2019 - Present</span></div>
                </div>
                
            </div>
        </section>
        )
    }
}