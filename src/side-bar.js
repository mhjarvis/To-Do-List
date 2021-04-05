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

const display = () => {

    let p = new Project("Chores", ["Take out Trash", "Clean sink"]);
    let n = new Project("Workout", ["Biceps Curl", "Triceps Press"]);

    projectArray.push(p);
    projectArray.push(n);

    console.log(projectArray);

    const side = document.getElementById('side-bar');
    const div = document.createElement('div');
    div.id = "project-list"
    side.appendChild(div);

    for(let i = 0; i < projectArray.length; i++) {

        const projectList = document.getElementById('project-list');
        const button = document.createElement('button');
        let ident = projectArray[i].title.toLowerCase();
        button.id = ident;
        button.className = "ind-project";
        button.innerHTML = projectArray[i].title;
        projectList.appendChild(button);
        
    }
}

// const displayProjects = () => {

//     let projects = [];

//     const showProjects = () => {

//         const sideBar = document.getElementById('side-bar');
//         const ul = document.createElement('ul');
//         ul.id = "project-list";
//         sideBar.appendChild(ul);

//         for(let i = 0; i < projects.length; i++) {

//             const projectList = document.getElementById('project-list');
//             const li = document.createElement('li');
//             li.id = "project" + i;
//             projectList.appendChild(li);

//         }

//     };





    // // Add new project
    // const addProject = (name) => {
    //     projects.push(name);
    //     console.log(projects);
    // }

    // addProject("Default");
    // showProjects();
































export { sideBar, projectButton, display}