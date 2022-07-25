const todoForm = document.querySelector("#newform");
const newTodo = document.querySelector("#newtodo");
const todoList = document.querySelector("#todolist");

const allTodos = JSON.parse(localStorage.getItem("nextTodo")) || [];

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let nextTodo = document.createElement('li');
    nextTodo.innerText = newTodo.value;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'DELETE';

    todoList.appendChild(nextTodo);
    nextTodo.appendChild(deleteButton); 
    todoForm.reset();
});
 

todoList.addEventListener('click', function(e){
    const lowerCasedTag = e.target.tagName.toLowerCase();
    if(lowerCasedTag === 'li') {
        e.target.style.textDecoration = 'line-through';
    } else if (lowerCasedTag === 'button') {
        e.target.parentNode.remove();
    }
    });

    localStorage.setItem("nextTodo", JSON.stringify(allTodos));