import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { faDumbbell, faCode, faCar, faTv, faImage } from "@fortawesome/free-solid-svg-icons"
import "./AboutMe.scss"
import myPhoto from "../../assets/my-photo.jpg"

const AboutMe = () => {
    return (
        <div className="about-me-page">
            <div className="photo-container">
                <LazyLoadImage
                    src={myPhoto}
                    alt="my-photo"
                    width="100%"
                    placeholderSrc={faImage}
                />
            </div>
            <div className="description-container">
                <p className="subtitle">About me</p>
                <p>
                    Last year when I was thinking about my future career I asked myself how could I further develop
                    my skills and what part of my work I liked the most. I was always into simplifying things and limiting repetitive tasks to the absolute minimum.
                    One of my colleagues created for us automated solutions based on Chrome Extensions and they were significantly reducing a need for manual work in our team.
                    I decided to dig into how it works and this is how my interest in programming began.<br /><br />
                    At the beginning not knowing exactly where should I start, I signed up for an intensive Fullstack Developer Bootcamp. During the
                    course, I realized that matters related to Front-end were those the most interesting to me. Therefore I
                    decided to focus on developing my web design skills with a strong accent on JavaScript
                    and React. When I started to feel confident with the Front-end part it was time to try to understand how apps work behind the scenes.
                    Being already familiar with JS it was natural to me that Node.js is the right place to start.<br /><br />
                    Nowadays I learn programming by completing online courses, taking part in developer
                    meetings, completing more advanced exercises, and developing my projects.
                    Additionally, I use the JavaScript knowledge at my position as Robotic Process
                    Automation Specialist for developing and maintaining Chrome Extensions.<br /><br />
                    Working as a Front-end or Fullstack Developer is one of my biggest dreams and I would be more than happy if I got a chance for my hobby to become my work!
            </p>
                <p className="subtitle">Hobbies</p>
                <div className="hobbies">
                    <div className="hobby">
                        <FontAwesomeIcon icon={faCode} className="hobby-icon" />
                        <p>Coding</p>
                    </div>
                    <div className="hobby">
                        <FontAwesomeIcon icon={faDumbbell} className="hobby-icon" />
                        <p>Sport</p>
                    </div>
                    <div className="hobby">
                        <FontAwesomeIcon icon={faTv} className="hobby-icon" />
                        <p>TV Series</p>
                    </div>
                    <div className="hobby">
                        <FontAwesomeIcon icon={faCar} className="hobby-icon" />
                        <p>Cars</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
