import { createTask, noteSection } from './main'


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

    document.getElementById("new-project-button").addEventListener("click", 
        function() {
            launchProjectForm();
        });
}

/* Display indidividual projects as they are created */
function displayProjects() {

    //let projectArray = JSON.parse(localStorage.getItem("projectArray"));
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
            });      
    }
}

/* Add new task to active project's task array */
function addTask(name) {
    activeProject.tasks.push(name);
    console.log(activeProject.tasks);
}

/* Delete Project from side-bar based on project title*/
function deleteProject(title) {

    projectArray = projectArray.filter(function(el) {
        return el.title != title;
    });
    rebuild();
}

/* Clear form */
function clearForm() {
    let element = document.getElementById('project-form');
    element.parentNode.removeChild(element);
}

/* Rebuild side-bar, project sectio */
function rebuild() {
    clearSideBar();
    displayProjects();
}

function getActiveProject() {
    return activeProject;
}

/* Reset side-bar inner-html for rebuilding */
function clearSideBar() {
    let x = document.getElementById('project-list');
    x.innerHTML = "";
}

/* Shows the new project form when clicking on 'new project' button */
function launchProjectForm() {

    const container = document.getElementById('container');
    const form = document.createElement('form');

    /* Create form element */
    form.id = 'project-form';
    container.appendChild(form);

    /* Create form header */
    const getForm = document.getElementById('project-form');
    const h1 = document.createElement('h1');
    h1.id = 'project-form-title';
    h1.innerHTML = 'Project Name:';
    getForm.appendChild(h1);

    /* Create form input field */
    const input = document.createElement('input');
    input.id = 'project-input-name';
    getForm.appendChild(input);

    /* Submit button */
    const button = document.createElement('button');
    button.id = 'project-form-submit';
    button.innerHTML = 'Submit';
    button.type = 'button';
    getForm.appendChild(button);

    /* Close Form Button */
    const closeFormButton = document.createElement('button');
    closeFormButton.id = 'close-form-button';
    closeFormButton.innerHTML = 'close';
    closeFormButton.type = 'button';
    getForm.appendChild(closeFormButton);

    /* Submit button event listner */
    document.getElementById('project-form-submit').addEventListener("click", 
        function() {
            submitProjectForm();
        }
    );  

    /* Close form event listner */
    document.getElementById('close-form-button').addEventListener("click",
        function() {
            clearForm();
        }
    );
}

/* Close project form and create new project object */
function submitProjectForm() {

    document.getElementById('project-form').style.display = "none";
    const titleInput = document.getElementById('project-input-name');
    let title = titleInput.value;

    let newProject = new Project(title);
    projectArray.push(newProject);

    clearForm();
    rebuild();
}

function getProjectArray() {
    return projectArray;
}

export { sideBar, displayProjects, getProjectArray, addTask, getActiveProject }