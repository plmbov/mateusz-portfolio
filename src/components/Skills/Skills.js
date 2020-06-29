import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import "./Skills.scss"

const Skills = () => {

    const skillRate = (rate) => {
        return [...Array(rate)].map((e, i) => <FontAwesomeIcon icon={faCircle} key={i} className="skill-rate-circle" />)
            .concat([...Array(10 - rate)].map((e, i) => <FontAwesomeIcon icon={faCircle} key={i + 10} className="skill-rate-circle" style={{ "opacity": ".3" }} />))

    }
    return (
        <div className="skills-page">
            <p className="skills-category">Technical skills</p>
            <div className="single-skill-container">
                <p>JavaScript</p>
                {skillRate(7)}
            </div>
            <div className="single-skill-container">
                <p>React</p>
                {skillRate(7)}
            </div>
            <div className="single-skill-container">
                <p>HTML</p>
                {skillRate(8)}
            </div>
            <div className="single-skill-container">
                <p>CSS</p>
                {skillRate(7)}
            </div>
            <div className="single-skill-container">
                <p>Node.js</p>
                {skillRate(3)}
            </div>
            <div className="single-skill-container">
                <p>Mongo.db</p>
                {skillRate(3)}
            </div>
            <p className="skills-category">Languages</p>
            <div className="single-skill-container">
                <p>English</p>
                {skillRate(8)}
            </div>
            <div className="single-skill-container">
                <p>Polish</p>
                {skillRate(10)}
            </div>
            <div className="single-skill-container">
                <p>Dutch</p>
                {skillRate(5)}
            </div>
        </div>
    )
}

export default Skills
