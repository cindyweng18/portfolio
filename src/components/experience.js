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
                        <h3 class="mb-0">Affordable Dentures & Implants </h3>
                        <div class="subheading mb-3">Office Manager</div>
                        <ul>
                            <li>Manage daily operations of the dental office, including staff leadership, patient scheduling, treatment coordination, and office efficiency to ensure quality care and operational success.</li>
                            <li>Lead and motivate the dental team by fostering strong relationships, implementing efficiency systems, and overseeing staff training and record management. </li>
                        </ul>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">September 2024 - Present</span></div>
                </div>

                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Shu Ping Rong DDS PC </h3>
                        <div class="subheading mb-3">Dental Treatment Coordinator (January 2021 - August 2024)</div>
                        <ul>
                            <li>Collaborate closely with the front desk team to optimize appointment scheduling while also playing a key role in training new staff, ensuring a smooth onboarding process.</li>
                            <li>Verify patient insurance coverage, clarify benefits and costs, and aid in understanding treatment options and financial transactions. </li>
                        </ul>
                        <div class="subheading mb-3"> Orthodontic Dental Assitant (November 2019 - January 2021)</div>
                        <ul>
                            <li> Assist orthodontists in a wide range of orthodontic procedures, from initial consultations to brace fittings and adjustments. </li>
                            <li> Managed patient records, updating treatment progress, and ensuring accurate documentation.</li>
                        </ul>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">November 2019 - Present</span></div>
                </div>

                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Tarifica</h3>
                        <div class="subheading mb-3">Software Engineer Intern</div>
                        <ul>
                            <li> Responsible for building, managing, and optimizing data gathering scrapers ETL pipeline, and APIs in a Python-based environment and using SQL. </li>
                            <li> Optimized the performance of web-scrapers-apps by continuous maintenance and troubleshoot </li>
                            <li> Create a program using Google Sheets, APIs, PostgreSQL Databases, and Python to inform developers and analysts about any web-scrapers-apps errors </li>
                        </ul>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">February 2020 - July 2020</span></div>
                </div>

                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">T-Mobile Authorized Dealer</h3>
                        <div class="subheading mb-3">Store Manager (June 2018 - October 2019)</div>
                        <ul>
                            <li>Lead and develop store staff to achieve sales goals and provide excellent customer service.</li>
                            <li>Oversee daily store operations, manage inventory, and ensure the store meets sales targets and operational standards.</li>
                        </ul>
                        <div class="subheading mb-3">Store Associate (June 2017 - June 2018)</div>
                        <ul>
                            <li> Assist customers with inquiries, promote and sell T-Mobile products and services, and address customer issues. </li>
                            <li> Stock shelves, organize products, and ensure the store is clean and visually appealing. </li>
                        </ul>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">June 2017 - October 2019</span></div>
                </div>

            </div>
        </section>
        )
    }
}