import { createTask } from './main'

/* Project class for creating projects and to-do lists */
/* List items will be stored in array as part of the Project objects */

class Project {
    constructor(title, tasks = []) {
        this.title = title;
        this.tasks = tasks;
    }
}

/* Create array to hold projects and project to-do list */
let projectArray = [];

let p = new Project("Chores", ["Take out Trash", "Clean sink"]);
let n = new Project("Workout", ["Biceps Curl", "Triceps Press"]);

projectArray.push(p);
projectArray.push(n);

/* Set activeProject to the first project in projectArray */
let activeProject = projectArray[0];

/* Creates sidebar and 'new project' button and adds it to document */
const sideBar = () => {

    const container = document.getElementById('container');

    /* Side-bar Section */
    const section = document.createElement('section');
    section.id = "side-bar";
    container.appendChild(section);

    /* New Project Button */
    const sideBar = document.getElementById('side-bar');
    const button = document.createElement('button');
    button.id = "new-project-button";
    button.innerHTML = "+ new project"
    sideBar.appendChild(button);
}

/* Display indidividual projects as they are created */
const displayProjects = () => {

    const side = document.getElementById('side-bar');
    const div = document.createElement('div');
    div.id = "project-list"
    side.appendChild(div);

    /* Iterate through array to print individual projects */
    for(let i = 0; i < projectArray.length; i++) {

        const projectList = document.getElementById('project-list');

        /* Create button for each project in projectArray */
        const button = document.createElement('button');
        let ident = projectArray[i].title.toLowerCase();
        button.id = ident;
        button.className = "ind-project";
        button.innerHTML = projectArray[i].title;
        projectList.appendChild(button);

        /* Create button to delete indiviual projects */
        const deleteButton = document.createElement('button');
        deleteButton.id = ident + "-delete";
        deleteButton.className = "delete-project-button";
        deleteButton.innerHTML = "x";
        button.append(deleteButton);  

        /* Add Listener to delete project */
        document.getElementById(ident).addEventListener("click", 
            function() {
                deleteProject(projectArray[i].title);
            }
        );      
    }
}

createTask("Poop", "Go Poop");


function addTask(name) {
    activeProject.tasks.push(name);
    console.log(activeProject.tasks);
}

/* Delete Project from side-bar based on project title*/
function deleteProject(title) {
    projectArray = projectArray.filter(function(el) {
        return el.title != title;
    });
    clearSideBar();     //clear side-bar contents
    displayProjects();  //rebuild side-bar
}

function getActiveProject() {
    return activeProject;
}

function clearSideBar() {
    let x = document.getElementById('project-list');
    x.innerHTML = "";
}

export { sideBar, displayProjects, deleteProject, addTask, getActiveProject }