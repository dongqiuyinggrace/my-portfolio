import React from 'react';
import './PortfolioPage.css'



const PortfolioPage = () => {
    return (
        <div id="gallery">
            <h3 className="title">Graphics</h3>
            <p>This place should be occupied with my photos
            </p>
            <hr />
            <ul className="grid">
                <li className="small" >
                    <img src="assets/images/alaska-wilderness-sky-aurora-borealis.jpg" alt="sky"/>
                </li>
                <li className="large" >
                    <img src="assets/images/glacier.jpg" alt="glacier"/>
                </li>
                <li className="small" >
                    <img src="assets/images/alaska-glacier-ice-mountains.jpg" alt="mountains"/>
                </li>
                <li className="large" >
                    <img src="assets/images/clouds.jpg" alt="clouds"/>
                </li>
            </ul>
        </div>
    )
}

export default PortfolioPage
