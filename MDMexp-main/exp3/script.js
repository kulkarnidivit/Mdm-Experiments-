// Function to add a new task
function addTask() {

    // Get input value
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    // Validation
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed on click
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete-btn";

    // Delete task
    deleteBtn.onclick = function (event) {
        event.stopPropagation(); // Prevent toggle
        li.remove();
    };

    // Add delete button to task
    li.appendChild(deleteBtn);

    // Add task to list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    input.value = "";
}
