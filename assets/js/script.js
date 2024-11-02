let btnAddTask = document.querySelector(".btn-add-task");
let addTask = document.querySelector(".addTask");
let cancelBtn = document.querySelector(".cancel-btn");
let cancelBtn2 = document.querySelector(".button-cancel-2");
let inputTitle = document.querySelector(".input-title");
let inputFeature = document.querySelector(".input-feature");
let inputBug = document.querySelector(".input-Bug");
let selectPriority = document.querySelector(".select-priority");
let selectStatus = document.querySelector(".select-status");
let inputDate = document.querySelector(".input-date");
let textareaDescription = document.querySelector(".textarea-description");
let buttonSave = document.querySelector(".button-save");
let buttonCancel = document.querySelector(".button-cancel");
let todoCards = document.querySelector(".to-do");
let inProgress = document.querySelector(".in-progress")
let sectionPopup = document.querySelector(".section-popup");
let btnEditAndRemove = document.querySelector(".btn-edit-remove");
let btnAddAndCancel = document.querySelector(".btn-save-cancel");
let btnEditTask = document.querySelector(".btn-edit-task");
let btnDelet = document.querySelector(".btn-delet-task");
let checked = "feature";
let todoTasks = [];
let inProgressTasks = [];
let slectedTaskIndex = 0;
let slectedTaskPart = "To Do"
cancelBtn2?.addEventListener("click", () => {
  addTask.style.display = "none";
});

inputFeature.addEventListener("click", () => {
  inputBug.checked = false;
});

inputBug.addEventListener("click", () => {
  inputFeature.checked = false;
});

btnAddTask.addEventListener("click", () => {
  btnEditAndRemove.style.display = "none";
  btnAddAndCancel.style.display = "block";
  addTask.style.display = "block";
  cleanForm();
});

cancelBtn.addEventListener("click", () => {
  console.log("hello");

  addTask.style.display = "none";
  addTask.style.display = "none";
});

let todoObjet = {};


buttonSave.addEventListener("click", () => {
  todoObjet = {
    title: inputTitle.value,
    type: inputBug.checked ? "Bug" : "Feature",
    priority: selectPriority.value,
    status: selectStatus.value,
    date: inputDate.value,
    description: textareaDescription.value,
  };
  if (todoObjet.status == "To Do" ) {    
    todoTasks.push(todoObjet);
  }else{
    inProgressTasks.push(todoObjet)
    readInProgress()
  }
  readTodo();
  addTask.style.display = "none";

});


function readTodo() {
  todoCards.innerHTML = `
  <div class="to-do">
          <div class="title-to-do">
            <h2>To do <span>(${todoTasks.length})</span></h2>
          </div>
  `
  for (let i = 0; i < todoTasks.length; i++) {
    todoCards.innerHTML  += `
    <div onclick="fillInputs(${i})" class="card-todo card">
    <div class="icon-container">
    <i class="fa-solid fa-question"></i>
    </div>
    <div class="content">
    <div class="title"> ${todoTasks[i].title}</div>
    <div class="details">${todoTasks[i].date}</div>
    <div class="paragraph-card">
    <p>${todoTasks[i].description}</p>
    </div>
    <div class="buttons-High">
    <span class="High ${"Feature"== todoTasks[i].type?"":"hide"} ">Feature</span>
    <span class="bug ${"Bug" == todoTasks[i].type?"":"hide"} ">Bug</span>
    <span  class="low s-btn ${"Low" == todoTasks[i].priority ? 'show-priority':""}">Low</span>
    <span  class="Medium s-btn ${'Medium' == todoTasks[i].priority ? 'show-priority':""}">Medium</span>
    <span  class="high s-btn ${'High' == todoTasks[i].priority ? 'show-priority':""}">High</span>
    <span  class="critical s-btn ${'Critical' == todoTasks[i].priority ? 'show-priority':""}">Critical</span>    
    </div>
    </div>
    </div>
    `;
  }


}
function readInProgress() {
  inProgress.innerHTML = `
  <div class="to-do in-progress">
          <div class="title-to-do">
            <h2>In Progress  <span>(${inProgressTasks.length})</span></h2>
          </div>
  `
  for (let i = 0; i < inProgressTasks.length; i++) {
    inProgress.innerHTML  += `
    <div  onclick="showForm(${i})" class="card-todo card">
    <div class="icon-container">
    <i class="fa-solid fa-question"></i>
    </div>
    <div class="content">
    <div class="title"> ${inProgressTasks[i].title}</div>
    <div class="details">${inProgressTasks[i].date}</div>
    <div class="paragraph-card">
    <p>${inProgressTasks[i].description}</p>
    </div>
    <div class="buttons-High">
    <span class="High ${"Feature"== inProgressTasks[i].type?"":"hide"} ">Feature</span>
    <span class="bug ${"Bug" == inProgressTasks[i].type?"":"hide"} ">Bug</span>
    <span  class="low s-btn ${"Low" == inProgressTasks[i].priority ? 'show-priority':""}">Low</span>
    <span  class="Medium s-btn ${'Medium' == inProgressTasks[i].priority ? 'show-priority':""}">Medium</span>
    <span  class="high s-btn ${'High' == inProgressTasks[i].priority ? 'show-priority':""}">High</span>
    <span  class="critical s-btn ${'Critical' == inProgressTasks[i].priority ? 'show-priority':""}">Critical</span>    
    </div>
    </div>
    </div>
    `;
  }
}


// redProgress()
function showForm(index) {
  addTask.style.display = "block";
  btnEditAndRemove.style.display = "block";
  btnAddAndCancel.style.display = "none";
  slectedTaskIndex = index;
}


function fillInputs(index) {
  inputTitle.value = todoTasks[index].title;
  inputBug.checked = todoTasks[index].type;
  selectPriority.value = todoTasks[index].priority;
  selectStatus.value = todoTasks[index].status;
  inputDate.value = todoTasks[index].date;
  textareaDescription.value = todoTasks[index].description;
  slectedTaskIndex = index;
  showForm()
}

function cleanForm() {
  inputTitle.value = "";
  inputBug.checked = "";
  selectPriority.value = "";
  selectStatus.value = "";
  inputDate.value = "";
  textareaDescription.value = "";
}

btnEditTask.addEventListener("click", () => {
  todoTasks[slectedTaskIndex] = {
    title: inputTitle.value,
    type: inputBug.checked ? "Bug" : "feature",
    priority: selectPriority.value,
    status: selectStatus.value,
    date: inputDate.value,
    description: textareaDescription.value,
  };
  console.log(todoTasks.status);
  
  if (todoTasks[slectedTaskIndex].status == "To Do") {
    readTodo();
  }else if(todoTasks[slectedTaskIndex].status == "In Progress"){
    inProgressTasks.push(todoTasks[slectedTaskIndex])
    todoTasks.splice(slectedTaskIndex, 1);
    readInProgress()
    readTodo();
  }

  addTask.style.display = "none";
});

btnDelet.addEventListener("click", () => {
  
  
  // if (slectedTaskPart == "To Do") {
    
  //   todoTasks.splice(slectedTaskIndex, 1);
  //   readTodo();
  // }else{
  //   console.log(slectedTaskIndex);
    
  //   inProgressTasks.splice(slectedTaskIndex, 1);
  //   readInProgress();
    
  // }
  inProgressTasks.splice(slectedTaskIndex, 1);
  readInProgress();
  addTask.style.display = "none";
});


