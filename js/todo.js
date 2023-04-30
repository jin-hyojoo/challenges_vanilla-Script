/********************* 
  TODO LIST
*********************/
function saveTodo(){    // SAVE toDos Array in local Storage
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e){
    //e.target.parentNode
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
};

function painTodo(todoItem){
    const li = document.createElement("li");
    li.id = todoItem.id;
    const span = document.createElement("span");
    span.innerText = `${todoItem.text} 　　　　　`;
    const button = document.createElement("button");

    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

};

function makeTodoList(e){
    e.preventDefault();
    const todoItem = todoFormInput.value;
    todoFormInput.value="";

    const todoObj = {
        text : todoItem,
        id : Date.now(),
    }

    toDos.push(todoObj);
    painTodo(todoObj);
    saveTodo();

}

todoForm.addEventListener("submit", makeTodoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(painTodo);
}
