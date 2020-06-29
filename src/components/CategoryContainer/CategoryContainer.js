import React, { useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "./CategoryContainer.scss"

const CategoryContainer = (props) => {

    const [hovered, sethovered] = useState(false)

    return (
        <div
            className="category-container"
            onMouseOver={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
        >
            <SwitchTransition>
                <CSSTransition
                    key={props.chosen}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames="fade"
                >
                    <div>
                        {props.chosen ?
                            <>
                                <div className="content-container">
                                    {props.categoryContent}
                                </div>
                            </>
                            :
                            <>
                                <p className="category-name" style={{ "fontSize": hovered ? "2.1rem" : "2rem" }}>{props.categoryName}</p>
                            </>
                        }
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default CategoryContainer
