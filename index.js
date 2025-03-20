document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskDescription = document.getElementById("new-task-description").value;
  
      if (taskDescription) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskDescription;
        taskList.appendChild(taskItem);
  
        // Clear the input field after adding the task
        document.getElementById("new-task-description").value = "";
      }
    });
  });~