// Get the necessary elements from the DOM
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Add a new task when the add button is clicked
addButton.addEventListener("click", function() {
  var task = taskInput.value;
  if (task.trim()) {
    var li = document.createElement("li");
    li.textContent = task;
    li.innerHTML += '<button class="delete-button">Delete</button>';
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

// Mark a task as completed when clicked
taskList.addEventListener("click", function(event) {
  var target = event.target;
  if (target.tagName === "LI") {
    target.classList.toggle("completed");}
    else if (target.classList.contains("delete-button")) {
        target.parentElement.remove();
      }
  
});
