import React from 'react';
import logo from "../../assets/Logo.png"
import github from "../../assets/github.png"
import linkdin from "../../assets/linkedin.png"
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer '>
            <div className='container'>
                <div className='footer-grid'>
                    <div><img src={logo} alt=''></img></div>
                    <div className='col-two'>This portfolio is made by React</div>
                    <div>
                        <ul className='social-list-wrapper'>
                            <li className='social-list'><a href='https://github.com/shakil18046' className='' target="_blank"><img src={github} alt=''></img></a></li>
                            <li className='social-list'><a href='https://www.linkedin.com/in/md-shakil-hossain-12b538211/' className='' target="_blank"><img src={linkdin} alt=''></img></a></li>                       
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;