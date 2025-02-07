import React, { Component } from 'react';
import '../styles.css';

export default class Projects extends Component {
    render() {
        return (
            <section class="resume-section" id="projects">
            <div class="resume-section-content reveal">
                <h2 class="mb-5">Projects</h2>
                <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"> Web Applications </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"> AI & Data Science </button>
                    </li>
                </ul>
                <br></br>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Online Store Group Project</h3>
                            <div class="subheading mb-3">City College of New York, NY.</div>
                            <p> Worked with a team to develop a web application using React, Flask, and MariaDB for users to purchase computer parts, use a discussion forum, manage their accounts, and view their purchased orders. </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"> A+ Kids </h3>
                            <div class="subheading mb-3">City College of New York, NY.</div>
                            <p> Worked with a team to develop a web application using React and Flask for children and teenagers to increase their time management skills with timers displaying study and break time. Deployed with Heroku. </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">PhotoShare</h3>
                            <div class="subheading mb-3">City College of New York, NY.</div>
                            <p> Designed a photo sharing application (such as Instagram) using Django and RESTful API where users can upload photos, view and comment on other user's posts. </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"> Flicks </h3>
                            <div class="subheading mb-3">City College of New York, NY.</div>
                            <p> Implemented and designed a client-side application using Next.js displaying current box office and top rental DVDs of movies and TV shows using The Movie Database API. </p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"> iAuctions </h3>
                            <div class="subheading mb-3">City College of New York, NY.</div>
                            <p> Built an e-commerce backend application using Node.js, Typescript, Express, and Sequelize where users can post auctions, and listings, place bids, and comment on listings.  </p>
                        </div>
                    </div>

                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Boba Shop AI Chatbot</h3>
                            <div class="subheading mb-3">Headstarter Fellowship, NY</div>
                            <p> Collaborated with a team in developing an AI-driven customer support system using Next.js, Python and Meta's LLaMA 3 to automate and enhance service interactions.</p>
                        </div>
                    </div>
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
                            <p> Worked with a team to explore, analyze, and predict life expectancy rates for densely populated countries using data from the World Health Organization (WHO) using Python’s libraries: Pandas and Matplotlib.</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Basic Neural Network</h3>
                            <div class="subheading mb-3">City College of New York, NY.</div>
                            <p> Created a simple Python3 list-based weightless neural network where we trained a program to recognize the letter H or L from an array and provide it with an unknown dataset of arrays where the program successfully matched each array to the letter.</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Image Segmentation on Cars </h3>
                            <div class="subheading mb-3">City College of New York, NY.</div>
                            <p> Collaborated with a group using Google Collab and Python libraries to create models using UNet, FPN, and Linknet that binary classifies cars on a segmented image from The CityScapes Dataset.</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
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
                </div> */}
            </div>
        </section>
        )
    }
}