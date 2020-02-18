import React from "react"
import './HeaderProject.css'

type AmountProjectsType = {
    amountProjects: number
}

export const HeaderProject: React.FC<AmountProjectsType> = props => {
    return (
        <nav className="project-nav">
            <ul className="project-nav__menu">
                <ul className="project-nav__left">
                    <li className="project-nav__item-left">
                        <a href="/" className="project-nav__link-left">
                            {`All Projects (${props.amountProjects})`}
                        </a>
                    </li>
                    <li className="project-nav__item-left">
                        <a href="/" className="project-nav__link-left workflow">
                            Workflow
                        </a>
                    </li>
                </ul>
                <ul className="project-nav__right">
                    <li className="project-nav__item-right">
                        <a href="/" className="project-nav__link-right">
                            Show projects:
                        </a>
                    </li>
                    <li className="project-nav__item-right">
                        <a href="/" className="project-nav__link-right allProjects">
                            <i className="fas fa-angle-down fa-lg all"><span>All</span></i>
                        </a>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}

