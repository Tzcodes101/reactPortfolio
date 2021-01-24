import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <ul className="social">
                <li>
                    <a href="https://github.com/Tzcodes101" className="button" target="_blank noopener norefferer"><i className="fab fa-github" />  </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/talia-zisman-4b758a140/" className="button" target="_blank noopener norefferer"><i class="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1OKpODKBrvxIHbLJPnELBVbCCh9TIxrKT/view?usp=sharing" className="button" target="_blank noopener norefferer"><i class="far fa-file"></i></a>
                </li>
            </ul>
            <p className="pull-right">
                <i class="fas fa-heart" /> Written in React.js
            </p>
        </footer>
    )
}

export default Footer;