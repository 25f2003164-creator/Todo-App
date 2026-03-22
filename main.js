const button=document.querySelector(".beep");
const ul=document.querySelector(".items");
const task=document.querySelector('#task')
button.addEventListener('click',onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if (task.value==='') return;
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(task.value));
    ul.appendChild(li);
    task.value=''
    const clear=document.createElement('Button');
    clear.textContent='Clear';
    clear.addEventListener('click',onRemove);
    function onRemove(e) {
        e.preventDefault();
        li.remove()
    }
    li.appendChild(clear)
}
console.log(task)