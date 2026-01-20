document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#task');
    const submit=document.querySelector('#Submit');
    const tasklist=document.querySelector('#tasks');
    submit.disabled = true;

    taskInput.onkeyup = () => {
        if(taskInput.value.length >0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }
    document.querySelector('form').onsubmit = () => {
        const task = taskInput.value.trim();
        if(!task){
            alert("Task cannot be empty!");
            return false;
        }
        const del = document.createElement('button');
        del.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        const li = document.createElement('li');
        li.textContent =task;
        li.append(del);
         
        del.onclick = () => {
            del.parentElement.remove();
        };
        tasklist.append(li);
        taskInput.value='';
        submit.disabled=true;
        return false;
    }
});