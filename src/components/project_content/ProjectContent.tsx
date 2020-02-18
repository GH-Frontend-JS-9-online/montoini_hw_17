import React from "react"
import './ProjectContent.css'

type ProjectContentType = {
    projectContentItems: Array<any>
}

export const ProjectContent: React.FC<ProjectContentType> = props => {
    const convertDate = (loadDate:string):string => {
        const month: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December']
        const date: Date = new Date(loadDate)
        return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
    }
    return (
        <>
            {props.projectContentItems.map(({title, timeSpent, company, cost, deadline, progress, status,
            assigned, _id }) => {
                return (
                    <ul key={_id as any} className="projects mainProjects__list" style = {
                        {borderColor: (progress === 0) ? '#e2e3e8' : (progress === 100) ? '#4caf50' : '#2196f3'}}>
                        <li className="mainProjects__item">
                            <div className="mainProjects__title">
                                <h4>{title}</h4>
                                <p>{company}</p>
                            </div>
                        </li>
                        <li className="mainProjects__item">
                            <div className="mainProjects__value">
                                <h4>{cost}</h4>
                            </div>
                        </li>
                        <li className="mainProjects__item">
                            <div className="mainProjects__deadline">
                                <h4>{`${convertDate(deadline)}`}</h4>
                                <p>10 days left</p>
                            </div>
                        </li>
                        <li className="mainProjects__item">
                            <div className="mainProjects__timeSpent">
                                <h4>{`${timeSpent} hours`}</h4>
                            </div>
                        </li>
                        <li className="mainProjects__item-progress">
                            <div className="mainProjects__progress">
                                <h4>{`${progress}%`}</h4>
                                <div>
                                    <span style = {
                                    {width: `${progress}%`, background: (progress === 0) ? '#9ea3b4' :
                                            (progress === 100) ? '#4caf50' : '#2196f3'}}>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="mainProjects__item">
                            <div className="mainProjects__status">
                                <h4>{status}</h4>
                            </div>
                        </li>
                        <li className="mainProjects__item">
                            <div className="mainProjects__assigned">
                                <i className="fas fa-circle"> </i>
                                <div>
                                    <h4>{assigned.name}</h4>
                                    <p>{assigned.position}</p>
                                </div>
                            </div>
                        </li>
                        <li className="mainProjects__item">
                            <div className="mainProjects__ellipsis">
                                <i className="fas fa-ellipsis-v"> </i>
                            </div>
                        </li>
                    </ul>
                )
            })}
        </>
    )
}