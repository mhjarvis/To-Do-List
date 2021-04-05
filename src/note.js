class ListItem {
    constructor(title, checked) {
        this.title = title;
        this.checked = false;
    }
    returnInfo() {
        return (title + " " + description);
    }
}



const note = () => {

    const noteContainer = document.getElementById('inner-note-box');

    const div = document.createElement('div');
    div.id = "note";
    noteContainer.appendChild(div);




    console.log("Testing from notes");
}

export { note }