const request = require('request')

export class Project {
    projects: Array<any>
    constructor(projectResponse: any) {
        this.projects = projectResponse
    }
}

export class ApiService {
    apiData: string;
    constructor() {
        this.apiData = `https://geekhub-frontend-js-9.herokuapp.com/api`;
    }
    getProjectsData(token: string, cb: (projects: Project) => any) {
        let parameters: any = {
            headers: {
                "x-access-token": token
            },
            json: true
        };
        request.get(
            `${this.apiData}/projects/`,
            parameters,
            (error: any, response: any, body: any) => {
                let project = new Project(body);
                cb(project)
            }
        );
    }
}
