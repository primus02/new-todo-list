// SELECTORS
const getStartedBtn= document.querySelector(".start-btn");
const addBtn= document.querySelector(".add-btn");
const addItemBtn= document.querySelector(".add-item-btn");
const TaskAddBtn= document.querySelector(".task-add-btn");
const createTaskContainer= document.querySelector(".create-task");
const tasksContainer= document.querySelector(".tasks");
const tasksMainContainer= document.querySelector(".tasks-container");
const inputTitle= document.querySelector(".title-field");
const inputDescription= document.querySelector(".description-field");
const inputDueDate= document.querySelector(".date-field");
const inputStatus= document.querySelector(".status-field");
const backBtn= document.querySelector(".fa-chevron-left");
let classCategory;


//Event Listeners
if(getStartedBtn){
getStartedBtn.addEventListener("click", ()=> {
    window.location.href= "click.html";
});
}

if(addBtn){
addBtn.addEventListener("click", ()=> {
    window.location.href= "create-task.html";
})
}

if(addItemBtn){
    addItemBtn.addEventListener("click", ()=> {
       
       if(inputTitle.value === "" || inputDescription.value === "" || inputDueDate.value === "" || inputStatus.value === ""){
           alert("All form fields must be filled appropriately");
           return;
       } 
      else{
        createTaskContainer.classList.add("d-none");
        tasksContainer.classList.remove("d-none");

        
        if(inputStatus.value === "Due"){
           classCategory= "due";
        }
        else if(inputStatus.value === "In-Progress"){
            classCategory= "in-progress";
         }
        else{
            classCategory= "done";
        }
        
    const task= `
                <div class="task">
                    <p class="due-date">Due on ${inputDueDate.value}</p>
                    <h2>${inputTitle.value}</h2>
                    <p class="created-date">${new Date().toDateString()}</p>
                    <p class="status ${classCategory}">${inputStatus.value}</p>
                </div>
                 `;

           tasksMainContainer.insertAdjacentHTML("afterbegin", task);
      }
    });
}

if(TaskAddBtn){
    TaskAddBtn.addEventListener("click", ()=> {
        tasksContainer.classList.add("d-none");
        createTaskContainer.classList.remove("d-none");
        
        inputTitle.value= "";
        inputDescription.value= "";
        inputDueDate.value= "";
        inputStatus.value= "";

    })
}

backBtn.addEventListener("click", ()=> {
    window.location.href= "index.html";
})