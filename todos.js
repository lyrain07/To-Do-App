document.addEventListener('DOMContentLoaded',()=> {
    const submit=document.querySelector('#Submit');
    const newTask=document.querySelector('#task');
    const tasklist=document.querySelector('#tasks');
    submit.disabled = true;

    newTask.onkeyup = () =>{
    if(newTask.value.length >0)
        {
            submit.disabled = false;
        }
    else{
        submit.disabled = true;
    }
    }
     document.querySelector('form').onsubmit = () => {
        const task = newTask.value;
        const p = document.createElement('p');
        const del =document.createElement('button');
        const li = document.createElement('li');
        p.innerHTML = task;
        p.style="display:inline; padding:5px; margin:5px;";
        del.innerHTML= "Delete";
        del.onclick = () => {
            del.parentElement.remove();
        };

        li.append(p);
        li.append(del);
        document.querySelector('#tasks').append(li);
        newTask.value='';
        submit.disabled=true;
        return false;
    //   document.querySelector('form').onsubmit = () => {
    //     const task = newTask.value.trim();
    //     if(task.length === 0){
    //         alert("Task cannot be empty");
    //         return false;
    //     }
    //     const li = document.createElement('li');
    //     li.textContent = task + " ";
    //     document.querySelector('#tasks').append(li);
    //     newTask.value='';
     }
    
});

  // document.querySelector('form').onsubmit = () => {
    //     const task = newTask.value;
    //     const p = document.createElement('p');
    //     const del =document.createElement('button');
    //     const li = document.createElement('li');
    //     p.innerHTML = task;
    //     p.style="display:inline; padding:5px; margin:5px;";
    //     del.innerHTML= "Delete";
    //     del.onclick = () => {
    //         del.parentElement.remove();
    //     };

    //     li.append(p);
    //     li.append(del);
    //     document.querySelector('#tasks').append(li);
    //     newTask.value='';
    //     submit.disabled=true;
    //     return false;
    // }