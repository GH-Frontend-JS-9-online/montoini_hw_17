import React from 'react'
import './App.css'
import {HeaderMenu} from '../header_menu/HeaderMenu'
import {AsideMenu} from "../aside_menu/AsideMenu";
import {MainProject} from "../project/MainProject";

export const App: React.FC = () => {
    const headerIcons: Array<string> = [' ']
    const asideIcons: Array<string> = [' ']
    return (
        <div className="App">
            <HeaderMenu headerIcons={headerIcons}/>
            <AsideMenu asideIcons={asideIcons}/>
            <MainProject/>
        </div>
    )
}

