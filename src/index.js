import { header } from './header'
import { projectButton, sideBar, display } from './side-bar'
import { noteSection } from './note-section'
import { note } from './note'


header();
sideBar();
projectButton();
display();
noteSection();
note();

/* Add new project to list */

let newProjectButton = document.getElementById('new-project-button');
