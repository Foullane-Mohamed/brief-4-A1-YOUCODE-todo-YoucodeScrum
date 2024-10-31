let btnAddTask= document.querySelector(".btn-add-task")
let addTask = document.querySelector(".addTask")
let cancelBtn = document.querySelector(".cancel-btn")
let inputTitle = document.querySelector(".input-title")
let inputFeature = document.querySelector(".input-feature")
let inputBug = document.querySelector(".input-Bug")
let selectPriority = document.querySelector(".select-priority")
let selectStatus = document.querySelector(".select-status")
let inputDate = document.querySelector(".input-date")
let textareaDescription = document.querySelector(".textarea-description")
let buttonSave = document.querySelector(".button-save")
let buttonCancel = document.querySelector(".button-cancel")
let cardTodo = document.querySelector(".card-todo")

let checked = "feature"

inputFeature.addEventListener("click", ()=>{
  inputBug.checked = false
})

inputBug.addEventListener("click", ()=>{

  inputFeature.checked = false
})
inputDate.addEventListener("change", ()=>{

  console.log(inputDate.value);
  
})

function selectedPriority(e) {
  console.log(e.value);
  
}





btnAddTask.addEventListener("click", ()=>{
  addTask.style.display = "block"  
})
cancelBtn.addEventListener("click", ()=>{
  addTask.style.display = "none"  
})

let todoArr =[]

buttonSave.addEventListener("click", ()=>{
  let todoObjet = {
    title:inputTitle.value,
    // type:
    priority:selectPriority.value,

  }  
})
