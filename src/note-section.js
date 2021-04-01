const noteSection = () => {

    const container = document.getElementById('container');
    
    const section = document.createElement('section');
    section.id = "note-section";
    container.appendChild(section);

    const noteSection = document.getElementById('note-section')
    const div = document.createElement('div');
    div.id = "inner-note-box";
    noteSection.appendChild(div);

}

export { noteSection }