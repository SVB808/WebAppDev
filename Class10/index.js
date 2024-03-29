//let todos = [{ id: 1, name: "Get Milk", priority: "high" }];
//read from local storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);
const renderTodos = () => {
  const todosListTbody = document.getElementById("todosListTbody");
  todosListTbody.innerHTML = "";
  todos.forEach((todo) => {
    const todoTr = document.createElement("tr");
    const todoTdId = document.createElement("td");
    todoTdId.setAttribute("class", "d-none");
    todoTdId.innerText = todo.id;
    todoTr.appendChild(todoTdId);
 
    const todoTdName = document.createElement("td");
    todoTdName.innerText = todo.name;
 
    const badge = document.createElement("span");
    badge.innerText = todo.priority;
    let badgeClass = "danger";
    if (todo.priority === "Medium") {
      badgeClass = "warning";
    } else if (todo.priority === "Low") {
      badgeClass = "secondary";
    }
    badge.setAttribute("class", "m-2 badge bg-" + badgeClass);
    todoTdName.appendChild(badge);
    todoTr.appendChild(todoTdName);
 
    const todoTdActions = document.createElement("td");
    const deleteButton = document.createElement("i");
    deleteButton.id = todo.id;
    deleteButton.onclick = removeTodo;
    deleteButton.setAttribute("class", "fa-solid fa-trash m-2");
    todoTdActions.appendChild(deleteButton);
    //todoTdActions.innerHTML =
    //  '<i class="fa-solid fa-pen-to-square m-2"></i> <i class="fa-solid fa-trash"></i>';
    todoTr.appendChild(todoTdActions);
    todosListTbody.appendChild(todoTr);
  });
};
 
const removeTodo = (event) => {
  const button = event.target;
  const todoId = button.id;
  console.log(todoId);
 
};
 
const addTodo = () => {
  const todoName = document.getElementById("todoName").value;
  const todoPriority = document.getElementById("todoPriority").value;
  const todo = {
    id: todos.length + 1,
    name: todoName,
    priority: todoPriority,
  };
  console.log(todo);
  todos.push(todo);
  //save to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
};
 
renderTodos();