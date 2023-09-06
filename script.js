//Assignment: Implement a Task Manager
//Requirements

// 1. The application should have a class named TaskManager.
// 2. The TaskManager class should have the following methods:
//     a. addTask(title, description): Adds a new task with the given title and
// description.
//     b. removeTask(index): Removes the task at the specified index.
//     c. listTasks(): Lists all the tasks with their indices, titles, and descriptions.
// 3. The application should handle invalid input gracefully, displaying appropriate error
// messages in the console if the user tries to remove a non-existing task or list tasks
// from an empty list.
// 4. Use ES6 classes and appropriate data structures to implement the Task Manager✅

//The application should have a class named TaskManager✅

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  //addTask(title, description): Adds a new task with the given title and description✅

  addTask(title, description) {
    const task = { title, description };
    this.tasks.push(task);
    console.log(`Task "${title}" added successfully.`);
  }

  //removeTask(index): Removes the task at the specified index.✅

  removeTask(index) {
    //handle invalid input✅
    if (index >= 0 && index < this.tasks.length) {
      const removedTask = this.tasks.splice(index, 1)[0];
      console.log(`Task "${removedTask.title}" removed successfully.`);
    } else {
      console.error("Invalid index. Task not removed.");
    }
  }

  //listTasks(): Lists all the tasks with their indices, titles, and descriptions.✅

  listTasks() {
    if (this.tasks.length === 0) {
      console.log("No tasks found.");
    } else {
      console.log("Tasks:");
      this.tasks.forEach((task, index) => {
        console.log(
          `Index: ${index}, Title: ${task.title}, Description: ${task.description}`
        );
      });
    }
  }
}

//Testing by Example
const taskManager = new TaskManager();

taskManager.addTask("Task 1", "Study for 8 hrs"); //ADDING TASK ONE✅
taskManager.addTask("Task 2", "Going market for shopping"); //ADDING TASK TWO✅
taskManager.addTask("Task 3", "Do some coding"); //ADDING TASK THREE✅

taskManager.listTasks(); //SHOW LIST✅

taskManager.removeTask(1); //REMOVE SUCCESSFULLY✅
taskManager.listTasks(); //UPDATED LIST AFTER REMOVING TASK✅

taskManager.removeTask(5); // SHOW ERROR , BECAUSE 10th INDEX DOES NOT EXIST❌
