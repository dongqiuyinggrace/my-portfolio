import React from 'react'
import './HomePage.css'

const HomePage = () => {
    return (
        <div id="home">
            <h1>I am Grace Dong</h1>
            <h3>I am a full stack developer</h3>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/qiuying-dong-711141116/" className="first-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/dongqiuyinggrace?tab=repositories">
                        <i className="fab fa-github-square"></i>
                    </a>
                </li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/GraceDong4">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100014293664117">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default HomePage
