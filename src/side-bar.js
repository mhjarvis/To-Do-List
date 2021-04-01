const sideBar = () => {

    const container = document.getElementById('container');

    const section = document.createElement('section');
    section.id = "side-bar";
    container.appendChild(section);
}

const projectButton = () => {

    const sideBar = document.getElementById('side-bar');
    const button = document.createElement('button');
    
    button.id = "new-project-button";
    button.innerHTML = "+ new project"
    sideBar.appendChild(button);
}

export { sideBar, projectButton }