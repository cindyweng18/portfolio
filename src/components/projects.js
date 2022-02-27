import React, { Component } from 'react';
import '../styles.css';

export default class Projects extends Component {
    render() {
        return (
            <section class="resume-section" id="projects">
            <div class="resume-section-content reveal">
                <h2 class="mb-5">Projects</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Janus</h3>
                        <div class="subheading mb-3">City College of New York, NY.</div>
                        <p> Worked on a team to create a chatbot for The City College of New York website using DistilBert and PyTorch for the model, Django, React, and SQLite for the web application.</p>
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Life Expectancy</h3>
                        <div class="subheading mb-3">City College of New York, NY.</div>
                        <p>Worked on a team to explore, analyze, and predict life expectancy rates for densely populated countries using data from World Health Organization (WHO).</p>
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Basic Neural Network Final Group Project</h3>
                        <div class="subheading mb-3">City College of New York, NY.</div>
                        <p>Created a simple Python3 list-based weightless neural network where we trained the program to recognize the letter H or L from an array and provide it with an unknown dataset of arrays where the program successfully matched each array to the letter.</p>
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Online Store Group Project</h3>
                        <div class="subheading mb-3">City College of New York, NY.</div>
                        <p>Created a web application using React, Flask, and MariaDB for users to purchase computer parts, use a discussion forum, manage their accounts, and view their purchased orders. </p>
                    </div>
                </div>

            </div>
        </section>
        )
    }
}