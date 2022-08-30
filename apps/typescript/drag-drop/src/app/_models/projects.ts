export enum ProjectWorkingState {
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED'
}

export class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public peopleCount: number,
        public state: ProjectWorkingState
    ) {}
}
