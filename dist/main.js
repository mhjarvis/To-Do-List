(()=>{"use strict";class e{constructor(e,t=[]){this.title=e,this.tasks=t}}let t=[],n=new e("Chores",["Take out Trash","Clean sink"]),o=new e("Workout",["Biceps Curl","Triceps Press"]);t.push(n),t.push(o);let c=t[0];function d(){const e=document.getElementById("side-bar"),n=document.createElement("div");n.id="project-list",e.appendChild(n);for(let e=0;e<t.length;e++){const n=document.getElementById("project-list"),o=document.createElement("button");let c=t[e].title.toLowerCase();o.id=c,o.className="ind-project",o.innerHTML=t[e].title,n.appendChild(o);const d=document.createElement("button");d.id=c+"-delete",d.className="delete-project-button",d.innerHTML="x",o.append(d),document.getElementById(c).addEventListener("click",(function(){var n;n=t[e].title,t=t.filter((function(e){return e.title!=n})),l()}))}}function i(){let e=document.getElementById("project-form");e.parentNode.removeChild(e)}function l(){document.getElementById("project-list").innerHTML="",d()}(()=>{const e=document.getElementById("container"),t=document.createElement("section"),n=document.createElement("h1");t.id="header",e.appendChild(t);const o=document.getElementById("header");n.id="page-title",n.innerHTML="To-Do List Project",o.appendChild(n)})(),(()=>{const n=document.getElementById("container"),o=document.createElement("section");o.id="side-bar",n.appendChild(o);const c=document.getElementById("side-bar"),d=document.createElement("button");d.id="new-project-button",d.innerHTML="+ new project",c.appendChild(d),document.getElementById("new-project-button").addEventListener("click",(function(){!function(){const n=document.getElementById("container"),o=document.createElement("form");o.id="project-form",n.appendChild(o);const c=document.getElementById("project-form"),d=document.createElement("h1");d.id="project-form-title",d.innerHTML="Project Name:",c.appendChild(d);const m=document.createElement("input");m.id="project-input-name",c.appendChild(m);const r=document.createElement("button");r.id="project-form-submit",r.innerHTML="Submit",r.type="button",c.appendChild(r);const s=document.createElement("button");s.id="close-form-button",s.innerHTML="close",s.type="button",c.appendChild(s),document.getElementById("project-form-submit").addEventListener("click",(function(){!function(){document.getElementById("project-form").style.display="none";let n=document.getElementById("project-input-name").value,o=new e(n);t.push(o),i(),l()}()})),document.getElementById("close-form-button").addEventListener("click",(function(){i()}))}()}))})(),(()=>{const e=document.getElementById("container");let t=c;const n=document.createElement("section");n.id="note-section",e.appendChild(n);const o=document.getElementById("note-section"),d=document.createElement("div");d.id="inner-note-box",o.appendChild(d);for(let e=0;e<t.tasks.length;e++){const n=document.getElementById("inner-note-box"),o=document.createElement("div");o.id="note"+e,o.className="note",n.appendChild(o);const c=document.getElementById("note"+e),d=document.createElement("h3");d.className="note-title",d.innerHTML=t.tasks[e],c.appendChild(d),console.log(t.tasks[e])}})(),d()})();