import React, { Component } from 'react';
import '../styles.css';

export default class Education extends Component {
    render() {
        return (
            <section class="resume-section" id="education">
                <div class="resume-section-content reveal">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">The City College of The City University of New York</h3>
                            <div class="subheading mb-3">Bachelor of Science</div>
                            <div>Major: Computer Science</div>
                            <div>Minor: Sociology</div>
                            <p>Graduated with Summa Cum Laude Honors</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2017 - January 2022</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Murry Bergtraum High School</h3>
                            <div class="subheading mb-3">Valedictorian</div>
                            <p>GPA: 4.0</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">February 2014 - July 2017</span></div>
                    </div>
                </div>
            </section>
        )
    }
}