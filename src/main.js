import { addTask, deleteProject, getActiveProject } from './side-bar'

/* Class for creating individul tasks */
class Task {
    constructor(task) {
        this.task = task;
    }
}

// function createTask(name, task) {
//     let name = new Task(task);
//     addTask(name);
//     console.log(getActiveProject);
// }

const createTask = (name, task) => {
    name = new Task(task);
    addTask(name);
};



const noteSection = () => {

    const container = document.getElementById('container');
    
    /* Create section element to house notes */
    const section = document.createElement('section');
    section.id = "note-section";
    container.appendChild(section);

    /* List-item example place holder */
    const noteSection = document.getElementById('note-section')
    const div = document.createElement('div');
    div.id = "inner-note-box";
    noteSection.appendChild(div);

    // /* Delete button to delete project */
    // const button = document.createElement('button');
    // button.id = "delete-project";
    // button.className = "delete-project-class";
    // button.innerHTML = "delete project";
    // noteSection.appendChild(button);
}

export { noteSection, createTask }