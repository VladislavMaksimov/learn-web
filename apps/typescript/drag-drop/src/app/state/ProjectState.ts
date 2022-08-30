import { Project, ProjectWorkingState } from "../_models/projects";
import State from "./State";

class ProjectState extends State<Project> {
    private static instance: ProjectState;
    private projects: Project[] = [];

    private constructor() {
        super();
    };

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProjectState();
        }
        return this.instance;
    }

    addProject(title: string, description: string, peopleCount: number) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            peopleCount,
            ProjectWorkingState.ACTIVE
        );
        this.projects.push(newProject);
        this.updateListeners();
    }

    moveProject(projectId: string, newState: ProjectWorkingState) {
        const neededProject = this.projects.find(project => project.id === projectId);
        if (neededProject && neededProject.state !== newState) {
            neededProject.state = newState;
            this.updateListeners();
        }
    }

    private updateListeners() {
        for (const listener of this.listeners) {
            listener(this.projects.slice());
        }
    }
}

const projectState = ProjectState.getInstance();

export default projectState;