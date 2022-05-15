// my selectors
document.querySelector('form').addEventListener('submit', submitForm);
document.querySelector('ul').addEventListener('click',clickDeleteOrCheck);  

// for clearall text

document.getElementById('clearAll').addEventListener('click', clearAll)


// my event handlers

function submitForm(e) { 
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function clickDeleteOrCheck(e){
    if (e.target.name == 'checkButton')
    checkTodo(e); 

    if (e.target.name == 'deleteButton')
    deleteTodo(e);
      
}
//declaring for  function for clear all
    function clearAll(e){
    document.querySelector('ul').innerHTML = '';
}
// my helpers function

      function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class ="todo-item">${todo}</span>
        <button name ="checkbutton"> <i class="fa fa-check-square" aria-hidden="true"></i></button>
        <button name = "deleteButton"> <i class="fa fa-trash" aria-hidden="true"></i></button>
      `; 

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

    function checkTodo(e){
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
         item.style.textDecoration = 'none';
    else 
    item.style.textDecoration = 'line-through';
}

    function deleteTodo(e){
    let item = e.target.parentNode;
    item.addEventListener('transitionen d', function(){
        item.remove();

    })

    item.classList.add('todo-list-item-fall');

    item.remove();

}
  