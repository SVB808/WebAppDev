//  read from local storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoData = document.getElementById("todoData");
const todoForm = document.getElementById("todoForm");
const alertMsg = document.getElementById("alertMsg");
const updateTask = document.getElementById("updateTask");

todoForm.addEventListener("submit", (e) => { 
    e.preventDefault();
    const todoName = document.getElementById("taskName").value;
    const todoPriority = document.getElementById("priority").value;
    const todo = {
        id: todos.length + 1,
        name: todoName,
        priority: todoPriority
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    todoForm.reset();
});

const deleteTodo = (id) => {
    localStorage.setItem("todos",JSON.stringify(todos.filter((todo)=>todo.id !== id)));
    todos=todos.filter((todo)=>todo.id !== id);
    renderTodos();
}

const editTodo = (id) => {
    document.getElementById("taskName").value = todos[id -1].name;
    document.getElementById("priority").value = todos[id -1].priority;

    updateTask.addEventListener("click",(e) => {
        e.preventDefault();
        todos[id-1].name = document.getElementById("taskName").value;
        todos[id-1].priority = document.getElementById("priority").value;
        localStorage.setItem("todos",JSON.stringify(todos));
        renderTodos();
        todoForm.reset();
    })
} 

const renderTodos = () => {
    let data = "";
    todos.forEach((todo) => {
        const pc = todo.priority === "High"?"danger":todo.priority === "Medium"?"warning":"primary";
        data += `<tr>           
            <td>${todo.name}</td>
            <td><span class = "badge bg-${pc}">${todo.priority}</td>
            <td>
                <button class="btn btn-success" onclick="editTodo(${todo.id})"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteTodo(${todo.id})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
    });
    document.getElementById("todoListTbody").innerHTML = data;
};

renderTodos();