let btnAddTask= document.querySelector(".btn-add-task")
let addTask = document.querySelector(".addTask")
let cancelBtn = document.querySelector(".cancel-btn")
let inputTitle = document.querySelector(".input-title")
let inputFeature = document.querySelector(".input-feature")
let inputBug = document.querySelector(".input-Bug")
let selectPriority = document.querySelector(".select-priority")

btnAddTask.addEventListener("click", ()=>{
  addTask.style.display = "block"  
})
cancelBtn.addEventListener("click", ()=>{
  addTask.style.display = "none"  
})