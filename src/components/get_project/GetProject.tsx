import React from 'react'
import './GetProject.css'

type GetProjectType = {
    getShowProject: string
}

export const GetProject: React.FC<GetProjectType> = props => {
    let addProject: any = React.createRef()
    const close = (): void => {
        addProject.current.style.display = 'none'
    }
    return (
        <div ref={addProject} className="showProject" style={{display: props.getShowProject}}>
            <div className="showProject__close" onClick={close}></div>
            <h1>Create project</h1>
            <form action="#" className="showProject__form">
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Company"/>
                <input type="text" placeholder="Cost"/>
                <input type="text" placeholder="Deadline"/>
                <input type="text" placeholder="Assigned"/>
                <button type="submit">Add project</button>
            </form>
        </div>
    )
}