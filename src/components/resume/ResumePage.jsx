import React from 'react';
import './ResumePage.css'

const ResumePage = () => {
    return (
        <div id="resume">
            <div className="row projects">
                <div className="col col-1"></div>
                <div className="col col-2 title">
                    <h4>projects</h4>
                </div>
                <div className="col col-8">
                    <h4>Build an app with ASP.NET Core, React and MobX</h4>
                    <p className="info">Self-taught course project <span>&#8226;</span> July 2020 - Oct. 2020</p>
                    <ul>
                        <li>Developed a social website application along with the course.</li>
                        <li>Created a multi-project solution using ASP.NET Core WebAPI and the React app with the DotNet CLI and the create-react-app. Applied MobX for state management.</li>
                    </ul>
                    <h4>Build an app with React, Redux, and Firestore</h4>
                    <p className="info">Self-taught course project <span>&#8226;</span> Mar. 2020 - June 2020</p>
                    <ul>
                        <li>Developed the front end with React and Semantic UI, applied Redux for state management, integrated google map and place auto-complete.</li>
                        <li>Implemented social login and register for Facebook and google with Firebase.</li>
                    </ul>
                    <h4>Build an app with ASP.Net Core and Angular</h4>
                    <p className="info">Self-taught course project <span>&#8226;</span> May 2019 - Sep. 2019</p>
                    <ul>
                        <li>Applied ASP.NET Core to develop the back end (WebAPI). SQLite and MySQL are used for database and Cloudiary was used as the storage for uploaded photos.</li>
                        <li>Applied Angular and Bootstrap to develop the front end, implemented paging, sorting, filtering photo uploading, a private messaging system. and some other good features.</li>
                    </ul>
                    <h4>Build a Web App with ASP.NET Core, MVC6, EF Core and Angular</h4>
                    <p className="info">Self-taught course project <span>&#8226;</span> Aug. 2018 - Dec. 2018</p>
                    <ul>
                        <li>Learned how to create web pages and APIs using ASP.NET Core MVC.</li>
                        <li>Learned how to use Angular to develop the front end and apply Bootstrap to style UI.</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row work">
                <div className="col col-1"></div>
                <div className="col col-2 title">
                    <h4>Work</h4>
                </div>
                <div className="col col-8">
                    <h4>Toshiba Medical System (R&D Center)</h4>
                    <p className="info">Senior Software Engineer / Image Processing Engineer</p>
                    <ul>
                        <li>Researched medical image processing and segmentation algorithms, 
                        implemented algorithms with C++, improved algorithm performance.</li>
                        <li>Designed and developed research workstation, including requirement 
                        discussion, design, coding and maintenance.</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row skills">
                <div className="col col-1"></div>
                <div className="col col-2 title">
                    <h4>Skills</h4>
                </div>
                <div className="col col-8">
                    <h4>Languages</h4>
                    <ul className="language-skills">
                        <li>
                            <em>C#</em>
                        </li>
                        <li>
                            <em>JAVASCRIPT</em>
                        </li>
                        <li>
                            <em>HTML5</em>
                        </li>
                        <li>
                            <em>CSS</em>
                        </li>
                        <li>
                            <em>C++</em>
                        </li>
                        <li>
                            <em>PYTHON</em>
                        </li>
                    </ul>
                    <h4>Frameworks</h4>
                    <ul className="framework-skills">
                        <li>
                            <em>ASP.NET</em>
                        </li>
                        <li>
                            <em>ANGULAR</em>
                        </li>
                        <li>
                            <em>REACT</em>
                        </li>
                        <li>
                            <em>NODEJS</em>
                        </li>
                    </ul>
                    <h4>Data Management Systems</h4>
                    <ul className="database-skills">
                        <li>
                            <em>MS SQL Server</em>
                        </li>
                        <li>
                            <em>MySQL</em>
                        </li>
                        <li>
                            <em>MongoDB</em>
                        </li>
                        <li>
                            <em>SQLite</em>
                        </li>
                    </ul>
                    <h4>Version Control Systems</h4>
                    <ul className="vcs-skills">
                        <li>
                            <em>Git</em>
                        </li>
                        <li>
                            <em>Hg (Mercurial)</em>
                        </li>
                    </ul>
                    <h4>Other Skills</h4>
                    <ul className="other-skills">
                        <li>
                            <em>Object Oriented Development</em>
                        </li>
                        <li>
                            <em>Design Pattern</em>
                        </li>
                        <li>
                            <em>Unit Testing</em>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row education">
                <div className="col col-1"></div>
                <div className="col col-2 title">
                    <h4>education</h4>
                </div>
                <div className="col col-8">
                    <h4>BeiHang University (China)</h4>
                    <p className="info">Master of Mechatronics Engineering</p>
                    <p>Relevant Subjects: </p>
                    <ul>
                        <li>Fundamentals of Software Techniques</li>
                        <li>Digital Image Processing</li>
                        <li>Computer Graphics</li>
                        <li>Experimental Single-Chip Applications</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResumePage
