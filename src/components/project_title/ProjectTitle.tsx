import React from "react"
import './ProjectTitle.css'

type ProjectTitleType = {
    projectTitleItems: Array<string>
}

export const ProjectTitle: React.FC<ProjectTitleType> = props => {
    return (
        <ul className="project">
            {props.projectTitleItems.map((index) => {
                return (
                    <li key={index} className="project-title">
                        <div className="project-title__item">
                            <p className="project-title__project">Project title</p>
                            <p className="project-title__value">Value</p>
                            <p className="project-title__deadline">Deadline</p>
                            <p className="project-title__time">Time spent</p>
                            <p className="project-title__progress">Progress</p>
                            <p className="project-title__status">Status</p>
                            <p className="project-title__assigned">Assigned to</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}