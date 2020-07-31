/* An demonstration of OOP using a task manager */
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Get all the 💩 out of the litter box");
const task2 = newTask("Do laundry", "😨");

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

task2.logState();
task2.markCompleted();
task2.logState();
