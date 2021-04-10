import { addTask, getActiveProject, getProjectArray } from './side-bar'

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
    let active = getActiveProject();

    /* Create section element to house notes */
    const section = document.createElement('section');
    section.id = "note-section";
    container.appendChild(section);

    /* List-item example place holder */
    const noteSection = document.getElementById('note-section')
    const div = document.createElement('div');
    div.id = "inner-note-box";
    noteSection.appendChild(div);

    /* Get current projectArray */
    let arr = getProjectArray();
    
    /* Create Task list for active project */
    for(let i = 0; i < active.tasks.length; i++) {

        const noteContainer = document.getElementById('inner-note-box');

        const div = document.createElement('div');
        div.id = "note" + i;
        div.className = "note";
        noteContainer.appendChild(div);

        const getNoteDiv = document.getElementById('note' + i);
        const h3 = document.createElement('h3');
        h3.className = "note-title";
        h3.innerHTML = active.tasks[i];
        getNoteDiv.appendChild(h3);

        console.log(active.tasks[i]);
    }
}

export { noteSection, createTask }