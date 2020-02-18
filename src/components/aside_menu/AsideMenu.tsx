import React from 'react'
import './AsideMenu.css'

interface AsideIconsMenu {
    asideIcons: Array<string>
}

export const AsideMenu: React.FC<AsideIconsMenu> = props => {
    return (
        <aside className="aside">
            <nav className="aside-nav">
                <ul className="aside-nav__menu">
                    {props.asideIcons.map((index) => {
                        return (
                            <li key={index} className="aside-nav__item">
                                <a href="/" className="aside-nav__link" >
                                    <i className="fa fa-home fa-lg aside-nav__icon"> </i>
                                    <i className="fa fa-bars fa-lg aside-nav__icon"> </i>
                                    <i className="fas fa-chart-line fa-lg aside-nav__icon"> </i>
                                    <i className="fa fa-envelope fa-lg aside-nav__icon"> </i>
                                    <i className="fas fa-user-friends fa-lg aside-nav__icon"> </i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}