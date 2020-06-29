import React, { useState } from "react";
import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {

  const [aboutMeFlexGrow, setaboutMeFlexGrow] = useState(1)
  const [portfolioFlexGrow, setportfolioFlexGrow] = useState(1)
  const [skillsFlexGrow, setskillsFlexGrow] = useState(1)
  const [contactFlexGrow, setcontactFlexGrow] = useState(1)

  const [aboutMeClicked, setaboutMeClicked] = useState(false)
  const [skillsClicked, setskillsClicked] = useState(false)
  const [portfolioClicked, setportfolioClicked] = useState(false)
  const [contactClicked, setcontactClicked] = useState(false)

  const expandContainer = (setContainerNameFlexGrow, setContainerNameClicked) => {
    setaboutMeFlexGrow("1 0 60px")
    setportfolioFlexGrow("1 0 60px")
    setskillsFlexGrow("1 0 60px")
    setcontactFlexGrow("1 0 60px")
    setaboutMeClicked(false)
    setskillsClicked(false)
    setportfolioClicked(false)
    setcontactClicked(false)
    setContainerNameFlexGrow("10 0 50vw")
    setTimeout(() => {
      setContainerNameClicked(true)
    }, 1000)
  }

  return (
    <div className="App">
      <div className="about-me container"
        style={{ "flex": aboutMeFlexGrow }}
        onClick={() => { !aboutMeClicked && expandContainer(setaboutMeFlexGrow, setaboutMeClicked) }}
      >
        <CategoryContainer
          categoryName={"About me"}
          categoryContent={<AboutMe />}
          chosen={aboutMeClicked}
        />
      </div>
      <div className="skills container"
        style={{ "flex": skillsFlexGrow }}
        onClick={() => { !skillsClicked && expandContainer(setskillsFlexGrow, setskillsClicked) }}>
        <CategoryContainer
          categoryName={"Skills"}
          categoryContent={<Skills />}
          chosen={skillsClicked}
        />
      </div>
      <div className="portfolio container"
        style={{ "flex": portfolioFlexGrow }}
        onClick={() => { !portfolioClicked && expandContainer(setportfolioFlexGrow, setportfolioClicked) }}>
        <CategoryContainer
          categoryName={"Portfolio"}
          categoryContent={<Portfolio />}
          chosen={portfolioClicked}
        />
      </div>
      <div className="contact container"
        style={{ "flex": contactFlexGrow }}
        onClick={() => { !contactClicked && expandContainer(setcontactFlexGrow, setcontactClicked) }}>
        <CategoryContainer
          categoryName={"Contact"}
          categoryContent={<Contact />}
          chosen={contactClicked}
        />
      </div>
    </div>
  );
}

export default App;
