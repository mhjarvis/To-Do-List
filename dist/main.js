(()=>{"use strict";let e=[];class t{constructor(e,t=[]){this.title=e,this.tasks=t}}(()=>{const e=document.getElementById("container"),t=document.createElement("section"),n=document.createElement("h1");t.id="header",e.appendChild(t);const o=document.getElementById("header");n.id="page-title",n.innerHTML="To-Do List Project",o.appendChild(n)})(),(()=>{const e=document.getElementById("container"),t=document.createElement("section");t.id="side-bar",e.appendChild(t)})(),(()=>{const e=document.getElementById("side-bar"),t=document.createElement("button");t.id="new-project-button",t.innerHTML="+ new project",e.appendChild(t)})(),(()=>{let n=new t("Chores",["Take out Trash","Clean sink"]),o=new t("Workout",["Biceps Curl","Triceps Press"]);e.push(n),e.push(o),console.log(e);const d=document.getElementById("side-bar"),c=document.createElement("div");c.id="project-list",d.appendChild(c);for(let t=0;t<e.length;t++){const n=document.getElementById("project-list"),o=document.createElement("button");let d=e[t].title.toLowerCase();o.id=d,o.className="ind-project",o.innerHTML=e[t].title,n.appendChild(o)}})(),(()=>{const e=document.getElementById("container"),t=document.createElement("section");t.id="note-section",e.appendChild(t);const n=document.getElementById("note-section"),o=document.createElement("div");o.id="inner-note-box",n.appendChild(o)})(),(()=>{const e=document.getElementById("inner-note-box"),t=document.createElement("div");t.id="note",e.appendChild(t),console.log("Testing from notes")})(),document.getElementById("new-project-button")})();