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
let inProgress = document.querySelector(".in-progress");
let doneTods = document.querySelector(".done.cards-3");
let sectionPopup = document.querySelector(".section-popup");
let btnEditAndRemove = document.querySelector(".btn-edit-remove");
let btnAddAndCancel = document.querySelector(".btn-save-cancel");
let btnDelet = document.querySelector(".btn-delet-task");
let checked = "Feature";
let todoTasks = JSON.parse(localStorage.getItem("allTodos")) || [];
let slectedTaskIndex = 0;
cancelBtn2?.addEventListener("click", () => {
  addTask.style.display = "none";
});

inputFeature.addEventListener("click", () => {
  if (inputFeature.checked) {
    inputBug.checked = false;
    checked = "Feature";
  }
});

inputBug.addEventListener("click", () => {
  if (inputBug.checked) {
    inputFeature.checked = false;
    checked = "Bug";
  }
});

btnAddTask.addEventListener("click", () => {
  btnEditAndRemove.style.display = "none";
  btnAddAndCancel.style.display = "block";
  addTask.style.display = "block";
  cleanForm();
});

cancelBtn.addEventListener("click", () => {
  addTask.style.display = "none";
  addTask.style.display = "none";
});

let todoObjet = {};

buttonSave.addEventListener("click", () => {
  todoObjet = {
    title: inputTitle.value,
    type: checked,
    priority: selectPriority.value,
    status: selectStatus.value,
    date: inputDate.value,
    description: textareaDescription.value,
  };
  todoTasks.push(todoObjet);
  readTodo();
  addTask.style.display = "none";
  localStorage.setItem("allTodos", JSON.stringify(todoTasks));
});

function readTodo() {
  let todoCounter = todoTasks.filter(task => task.status === "To Do").length;
let inProgressCounter = todoTasks.filter(task => task.status === "In Progress").length;
let doneCounter = todoTasks.filter(task => task.status === "Done").length;
  todoCards.innerHTML = `
  <div class="to-do">
          <div class="title-to-do">
            <h2>To do <span>(${todoCounter})</span></h2>
          </div>
  `;

  inProgress.innerHTML = `
  <div class="to-do in-progress">
          <div class="title-to-do">
            <h2>In Progress  <span>(${inProgressCounter})</span></h2>
          </div>
  `;

  doneTods.innerHTML = `
    <div class="title-done">
            <h2>Done <span>(${doneCounter})</span></h2>
          </div>
  `;
  for (let i = 0; i < todoTasks.length; i++) {
    if (todoTasks[i].status == "To Do") {
      todoCards.innerHTML += `
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
      <span class="High ${
        "Feature" == todoTasks[i].type ? "" : "hide"
      } ">Feature</span>
      <span class="bug ${"Bug" == todoTasks[i].type ? "" : "hide"} ">Bug</span>
      <span  class="low s-btn ${
        "Low" == todoTasks[i].priority ? "show-priority" : ""
      }">Low</span>
      <span  class="Medium s-btn ${
        "Medium" == todoTasks[i].priority ? "show-priority" : ""
      }">Medium</span>
      <span  class="high s-btn ${
        "High" == todoTasks[i].priority ? "show-priority" : ""
      }">High</span>
      <span  class="critical s-btn ${
        "Critical" == todoTasks[i].priority ? "show-priority" : ""
      }">Critical</span>    
      </div>
      </div>
      </div>
    
      `;
    } else if (todoTasks[i].status == "In Progress") {
      inProgress.innerHTML += `
      <div  onclick="fillInputs(${i})" class="card-todo card">
      <div class="icon-container">
  
      <i class="fa-solid fa-circle-notch"></i>
      </div>
      <div class="content">
      <div class="title"> ${todoTasks[i].title}</div>
      <div class="details">${todoTasks[i].date}</div>
      <div class="paragraph-card">
      <p>${todoTasks[i].description}</p>
      </div>
      <div class="buttons-High">
      <span class="High ${
        "Feature" == todoTasks[i].type ? "" : "hide"
      } ">Feature</span>
      <span class="bug ${"Bug" == todoTasks[i].type ? "" : "hide"} ">Bug</span>
      <span  class="low s-btn ${
        "Low" == todoTasks[i].priority ? "show-priority" : ""
      }">Low</span>
      <span  class="Medium s-btn ${
        "Medium" == todoTasks[i].priority ? "show-priority" : ""
      }">Medium</span>
      <span  class="high s-btn ${
        "High" == todoTasks[i].priority ? "show-priority" : ""
      }">High</span>
      <span  class="critical s-btn ${
        "Critical" == todoTasks[i].priority ? "show-priority" : ""
      }">Critical</span>    
      </div>
      </div>
      </div>
    
      `;
    } else if (todoTasks[i].status == "Done") {
      doneTods.innerHTML += `
      <div  onclick="fillInputs(${i})" class="card-todo card">
      <div class="icon-container">
      <i class="fa-solid fa-check"></i>
      </div>
      <div class="content">
      <div class="title"> ${todoTasks[i].title}</div>
      <div class="details">${todoTasks[i].date}</div>
      <div class="paragraph-card">
      <p>${todoTasks[i].description}</p>
      </div>
      <div class="buttons-High">
      <span class="High ${
        "Feature" == todoTasks[i].type ? "" : "hide"
      } ">Feature</span>
      <span class="bug ${"Bug" == todoTasks[i].type ? "" : "hide"} ">Bug</span>
      <span  class="low s-btn ${
        "Low" == todoTasks[i].priority ? "show-priority" : ""
      }">Low</span>
      <span  class="Medium s-btn ${
        "Medium" == todoTasks[i].priority ? "show-priority" : ""
      }">Medium</span>
      <span  class="high s-btn ${
        "High" == todoTasks[i].priority ? "show-priority" : ""
      }">High</span>
      <span  class="critical s-btn ${
        "Critical" == todoTasks[i].priority ? "show-priority" : ""
      }">Critical</span>    
      </div>
      </div>
      </div>
  
      `;
    }
  }
}

readTodo();
function showForm() {
  addTask.style.display = "block";
  btnEditAndRemove.style.display = "block";
  btnAddAndCancel.style.display = "none";
}

function fillInputs(index) {
  inputTitle.value = todoTasks[index].title;
  if (todoTasks[index].type == "Bug") {
    inputBug.checked = true;
    inProgress.checked = false;
  } else {
    inputBug.checked = true;
    inProgress.checked = false;
  }

  selectPriority.value = todoTasks[index].priority;
  selectStatus.value = todoTasks[index].status;
  inputDate.value = todoTasks[index].date;
  textareaDescription.value = todoTasks[index].description;
  slectedTaskIndex = index;

  showForm();
}

function cleanForm() {
  inputTitle.value = "";
  inputBug.checked = "";
  selectPriority.value = "";
  selectStatus.value = "";
  inputDate.value = "";
  textareaDescription.value = "";
}

function editTask() {
  objtodo = {
    title: inputTitle.value,
    type: checked,
    priority: selectPriority.value,
    status: selectStatus.value,
    date: inputDate.value,
    description: textareaDescription.value,
  };

  todoTasks[slectedTaskIndex] = objtodo;
  readTodo();

  addTask.style.display = "none";
  localStorage.setItem("allTodos", JSON.stringify(todoTasks));
}

btnDelet.addEventListener("click", () => {
  todoTasks.splice(slectedTaskIndex, 1);
  readTodo();
  addTask.style.display = "none";
  localStorage.setItem("allTodos", JSON.stringify(todoTasks));
});
