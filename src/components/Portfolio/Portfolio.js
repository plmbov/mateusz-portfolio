import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css";
import "./Portfolio.scss"
import projects from "./projects/projects"

const Portfolio = () => {

    return (
        <div className="portfolio-page">
            <Carousel
                showStatus={false}
                showThumbs={false}
                emulateTouch={true}
                useKeyboardArrows={true}>
                {projects.map((e, i) => {
                    return <div className="single-project">
                        <img src={projects[i].image} alt="project" />
                        <p className="legend"><b>{projects[i].title}</b> <br /> {projects[i].description}</p>
                        <div className="buttons-contanier">
                            <a href={projects[i].url} target="_blank" rel="noopener noreferrer">
                                <button>Visit the page</button>
                            </a>
                            <a href={projects[i].github} target="_blank" rel="noopener noreferrer">
                                <button>See the code</button>
                            </a>
                        </div>
                    </div>
                })}
            </Carousel>
        </div >
    )
}

export default Portfolio
