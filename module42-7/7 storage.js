// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// Get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// Clear local storage
// localStorage.clear();
// console.log(name, age);

document.getElementById("submitBtn").addEventListener("click", function (e) {
  const task = document.getElementById("task").value;
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  //   alert("Task saved");
  e.preventDefault();
});

document.getElementById("clear").addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
