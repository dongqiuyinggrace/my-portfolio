import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div id="about" className="row">
            <div className="col col-2 about-image">
                <img src="/assets/images/thumbnail.jpg" alt="thumbnail" width="150px" height="150px" /> 
            </div>
            <div className="col col-10">
                <h3 className="title">About Me</h3>
                <p className="about-bio">Worked as a software developer (C++) for 7 years. 
                    Self-taught as a web developer for 2 years. Learned .Net, C#, JavaScript, HTML, CSS, React, Angular, 
                    NodeJs and so on.
                </p>
                <div className="row about-contact">
                    <div className="contact-details col col-5">
                        <h3>Contact Details</h3>
                        <p className="address">
                            Grace Dong <br/>
                            68 Croydon Hills Drive <br/>
                            Croydon Hills, VIC, 3136 <br/>
                            (61) 0426 578 920 <br/>
                            dongqiuyinggrace@gmail.com
                        </p>
                    </div>
                    <div className="col col-5 download">
                        <Link to="/resume" className="btn btn-secondary">
                            More About Me
                        </Link>
                    </div>
                </div>          
            </div>
        </div>
    )
}

export default AboutPage
