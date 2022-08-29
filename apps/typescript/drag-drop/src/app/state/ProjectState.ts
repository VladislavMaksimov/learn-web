/* eslint-disable @typescript-eslint/ban-types */
class ProjectState {
    private static instance: ProjectState;
    private projects: any[] = [];
    private listeners: Function[] = [];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(){};

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProjectState();
        }
        return this.instance;
    }

    addListener(listenerCb: Function) {
        this.listeners.push(listenerCb);
    }

    addProject(title: string, description: string, peopleCount: number) {
        const newProject = {
            id: Math.random().toString(),
            title: title,
            description: description,
            people: peopleCount
        };
        this.projects.push(newProject);
        for (const listener of this.listeners) {
            listener(this.projects.slice());
        }
    }
}

const projectState = ProjectState.getInstance();

export default projectState;