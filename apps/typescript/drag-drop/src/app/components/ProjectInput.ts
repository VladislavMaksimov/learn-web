import Autobind from "../decorators/Autobind";
import projectState from "../state/ProjectState";
import { Validatable, validate } from "../utils/validator";

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("root")! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }
    
    private getUserInput(): [string, string, number] {
        const title = this.titleInputElement.value;
        const description = this.descriptionInputElement.value;
        const peopleCount = Number(this.peopleInputElement.value);
        return [title, description, peopleCount];
    }

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        try {
            const userInput = this.getUserInput();
            const [title, description, peopleCount] = userInput;
            
            const titleValidatable: Validatable = {
                value: title,
                required: true,
            };

            const descriptionValidatable: Validatable = {
                value: description,
                required: true,
                minLength: 5,
            };

            const peopleCountValidatable: Validatable = {
                value: peopleCount,
                required: true,
                min: 1,
                max: 5,
            };

            if (!validate(titleValidatable)) {
                throw new Error('Enter title!');
            }

            if (!validate(descriptionValidatable)) {
                throw new Error('Enter description contains at least 5 symbols!')
            }

            if (!validate(peopleCountValidatable)) {
                throw new Error('Enter the count of people greater of equal to 1 and lower of equal to 5!')
            }

            projectState.addProject(title, description, peopleCount);

        } catch(err) {
            alert(err);
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = ''; 
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

export default ProjectInput;