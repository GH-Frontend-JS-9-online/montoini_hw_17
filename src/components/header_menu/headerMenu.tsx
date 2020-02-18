import React, {useState} from 'react'
import './HeaderMenu.css'
import {GetProject} from '../get_project/GetProject'
const logo = require('../../inserts/images/header/logo.png')

interface headerIconsMenu {
    headerIcons: Array<string>
}

export const HeaderMenu: React.FC<headerIconsMenu> = props => {
    const [showProject, setProject] = useState(false)
    const toggleProject = (id: number): void => {
        if (id === 0) {
            setProject(!showProject)
        }
    }
    return(
        <>
            <ul className="header-nav__menu">
                {props.headerIcons.map((item, index) => {
                    return (
                        <li key={index} onClick={(event) => toggleProject(index)}
                            className="header-nav__item">
                            <a href="/" className="header-nav__logo">
                                <img src={logo} alt="logo"/>
                            </a>
                            <a href="/" className="header-nav__link">
                                <i className="fas fa-plus header-nav__icon-plus"><span>Add</span></i>
                                <i className="fas fa-search fa-lg header-nav__icon"> </i>
                                <i className="far fa-bell fa-lg header-nav__icon"> </i>
                                <i className="fas fa-angle-down fa-lg header-nav__icon"> </i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <GetProject getShowProject={(showProject) ? 'block' : ' '}/>
        </>
    )
}