const header = () => {
    
    const container = document.getElementById('container');
    const section = document.createElement('section');
    const h1 = document.createElement('h1');

    section.id = "header";
    container.appendChild(section);

    const header = document.getElementById('header');
    h1.id = "page-title";
    h1.innerHTML = "To-Do List Project";
    header.appendChild(h1);
}

export { header }