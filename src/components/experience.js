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
                        <ul>
                            <li> Responsible for building and managing data gathering scrapers, APIs in Python-based environment using PostgreSQL </li>
                            <li> Optimized the performance of web-scrapers-apps by continuous maintenance and troubleshoot </li>
                            <li> Create a program using Google Sheets, APIs, PostgreSQL Databases, and Python to inform developers and analysts about any web-scrapers-apps errors </li>
                        </ul>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">February 2020 - July 2020</span></div>
                </div>

                {/* <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0"> Shu Ping Rong DDS </h3>
                        <div class="subheading mb-3"> Recepcionist </div>
                        <ul>
                            <li> Manage incoming phone calls, address patient inquiries, scheduled appointments, and route calls to appropriate staff members. </li>
                            <li> Verify patient insurance coverage, explain benefits and estimated costs, and assist patients in understanding their treatment options including co-payments, explaining fees, and ensuring accurate financial transactions. </li>
                        </ul>
                    <div class="flex-shrink-0"><span class="text-primary"> </span></div>
                </div> 
                </div> */}
                
                
                {/* <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Manhattan Dentistry NYC PC</h3>
                        <div class="subheading mb-3">Part-Time Dental Assistant (2019 - 2021)</div>
                        <ul>
                            <li> Assist orthodontists in a wide range of orthodontic procedures, from initial consultations to brace fittings and adjustments. </li>
                            <li> Conduct X-ray imaging, following radiation safety guidelines, and ensured high-quality images for accurate diagnosis.</li>
                        </ul>
                        <div class="subheading mb-3"> Manager (2021 - Present)</div>
                        <ul>
                            <li>Collaborate closely with the front desk team to optimize appointment scheduling and patient flow, minimizing wait times.</li>
                            <li>Play a key role in training new dental assistants, ensuring a smooth onboarding process, and maintaining high clinical standards.</li>
                            <li> Order and manage dental supplies, equipment, and materials. </li>
                        </ul>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">December 2019 - Present</span></div>
                </div> */}
                
            </div>
        </section>
        )
    }
}