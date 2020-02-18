import React from "react"
import "./MainProject.css"
import {HeaderProject} from '../header_project/HeaderProject'
import {ProjectTitle} from '../project_title/ProjectTitle'
import {ProjectContent} from '../project_content/ProjectContent'
import {ApiService} from "../services/ApiService"
import {Project} from "../services/ApiService"

export const MainProject: React.FC = () => {
    let api = new ApiService()
    api.getProjectsData(JSON.parse(localStorage.getItem('token') as any), (projects: Project) => {
        localStorage.setItem('projects', JSON.stringify(projects))
        console.table(projects)
    })

    const projectTitleItems: Array<string> = ['']

    return (
        <div className="inside">
            <HeaderProject amountProjects={[...JSON.parse(localStorage.getItem('projects') as
                any).projects].length}/>
            <ProjectTitle projectTitleItems={projectTitleItems}/>
            <ProjectContent projectContentItems = {[...JSON.parse(localStorage.getItem('projects') as
                any).projects]}/>
        </div>
    )
}