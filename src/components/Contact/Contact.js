import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import "./Contact.scss"

const Contact = () => {
    return (
        <div className="contact-page">
            <a href="mailto:mateusz.bojarski90@gmail.com">
                <div className="contact">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                    <p>mateusz.bojarski90@gmail.com</p>
                </div>
            </a>
            <a href="https://github.com/plmbov/" target="_blank" rel="noopener noreferrer">
                <div className="contact">
                    <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                    <p>github.com/plmbov</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/mateusz-bojarski-422a1078/" target="_blank" rel="noopener noreferrer">
                <div className="contact">
                    <FontAwesomeIcon icon={faLinkedinIn} className="contact-icon" />
                    <p>LinkedIn Profile</p>
                </div>
            </a>
        </div>
    )
}

export default Contact
