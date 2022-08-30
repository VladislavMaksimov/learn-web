import Autobind from "../decorators/Autobind";
import projectState from "../state/ProjectState";
import { Project, ProjectWorkingState } from "../_models/projects";
import Component from "./Component";
import ProjectItem from "./ProjectItem";
import { DragTarget } from "./types";

class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: ProjectWorkingState) {
        super("project-list", "root", false, `${type.toLowerCase()}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    private renderProjects() {
        const listElement = document.getElementById(`${this.type.toLowerCase()}-projects-list`)! as HTMLUListElement;
        listElement.innerHTML = '';
        for (const project of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, project);
        }
    }
   
    @Autobind
    dragOverHandler(event: DragEvent): void {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listElement = this.element.querySelector('li')!;
            listElement.classList.add('droppable');
        }
    }

    @Autobind
    dropHandler(event: DragEvent): void {
        const projectId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(projectId, this.type);
    }

    @Autobind
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dragLeaveHandler(_: DragEvent): void {
        const listElement = this.element.querySelector('li')!;
        listElement.classList.remove('droppable');
    }

    configure(): void {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('drop', this.dropHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);

        projectState.addListener((projects: Project[]) => {
            const filteredProjects = projects.filter(project => {
                if (this.type === ProjectWorkingState.ACTIVE) {
                    return project.state === ProjectWorkingState.ACTIVE;
                }
                return project.state === ProjectWorkingState.FINISHED;
            })
            this.assignedProjects = filteredProjects;
            this.renderProjects();
        });

    }

    renderContent() {
        const listId = `${this.type.toLowerCase()}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type + ' PROJECTS';   
    }
}

export default ProjectList;