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
            return false;
        }
        const del = document.createElement('button');
        del.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        const li = document.createElement('li');
        li.textContent =task;
        li.append(del);
        li.style="display:flex; justify-content:space-between; align-items:center; padding:5px; margin:5px; border-bottom:1px solid gray;";
        del.onclick = () => {
            del.parentElement.remove();
        };
        tasklist.append(li);
        taskInput.value='';
        submit.disabled=true;
        return false;
    }
});