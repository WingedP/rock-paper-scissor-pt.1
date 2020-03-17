import React from 'react';
import "./Toolbar.css";
const toolbar = props => (

    <nav className="navbar">
        <ul className="navbar-nav">

            <li className="logo">
            <a href="#">
                <img className="logoimg" src="https://lh3.googleusercontent.com/T-vD9tvlcPBf_1lY-3m8hQ6J-lqBROMkMut-CN5vohyJhk-kfVjfPpb18Uk3aiGPG9_5-fbunw=w128-h128-e365"></img>
            </a>
            </li>

            <li className="nav-item">
            <a href="#" className="nav-link"><i className="fonticon" className="fas fa-paw"></i>
            <span class="link-text">Js</span></a>
            </li>

            <li className="nav-item">
            <a href="#" className="nav-link"><i className="fonticon" className="fas fa-paw"></i>
            <span className="link-text">so</span></a>
            </li>

            <li className="nav-item">
            <a href="#" className="nav-link"><i className="fonticon" className="fas fa-paw"></i>
            <span className="link-text">hard</span></a>
            </li>

            <li className="nav-item">
            <div className="text">Made</div>
            <div className="text"> by</div>
            <div className="author">Nhan</div>
            <div className="author"> Ng.</div>
            </li>

            <li className="nav-item">
            <a href="#" className="nav-link"><i class="far fa-moon"></i>
            <span className="link-text"><i class="far fa-sun"></i></span></a>
            </li>
            
        </ul>
    </nav>



);

export default toolbar;