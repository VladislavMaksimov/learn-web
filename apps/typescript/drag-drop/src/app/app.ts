import ProjectInput from "./components/ProjectInput";
import ProjectList from "./components/ProjectList";
import { ProjectWorkingState } from "./_models/projects";

new ProjectInput();
new ProjectList(ProjectWorkingState.ACTIVE);
new ProjectList(ProjectWorkingState.FINISHED);