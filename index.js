var taskUpdate=0;
var taskDelete=0;
function addTask(){
    if("Update Task" == document.getElementById("addbtn").innerText){
        updateCardValue(document.getElementById("addbtn").value);
    }
    else{
        let title = document.getElementById("title");
        let desc = document.getElementById("desc");
        let status = document.getElementById("status");
        var task = {
            title: title.value,
            desc: desc.value,
            status: status.value,
            taskUpdate: taskUpdate++,
            taskDelete : taskDelete++
        }
        if (task.title.length> 0 && task.desc.length> 0) {
            createcard(task);
            title.value =""; desc.value ="";
        }
    }
}


function deletecard(value){
    console.log("value "+ value);
    const card = document.getElementById(value);
    document.querySelector("#allcards").removeChild(card);
    --taskDelete;
    --taskUpdate;
    console.log("card deleted : ");
}

function updatecard(value){
    const card = document.getElementById(value);
    let title = card.getElementsByTagName('h5')[0].innerText;
    let desc = card.getElementsByTagName('h6')[0].innerText;
    // let status = card.getElementsByTagName('p')[0].innerText;
    document.getElementById("title").value = title;
    document.getElementById("desc").value = desc;
    document.getElementById("addbtn").innerText = "Update Task";
    document.getElementById("addbtn").value = value;
}
function updateCardValue(value){
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let status = document.getElementById("status").value;
    const card = document.getElementById(value);
    card.getElementsByTagName('h5')[0].innerText = title;
    card.getElementsByTagName('h6')[0].innerText = desc;
    card.getElementsByTagName('p')[0].innerText = status;
    console.log("Task Updated!!!");
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("status").getElementsByTagName('option')[0].selected = true;
    document.getElementById("addbtn").innerText = "Add Task";
    document.getElementById("addbtn").value = taskDelete;
}
function createcard(task){
    let card = document.createElement('div');
    card.setAttribute('id',task.taskDelete);
    let clutter = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title border-bottom">${task.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${task.desc}</h6>
    <p class="card-text">${task.status}</p>
    <button class="btn btn-dark" value="${task.taskUpdate}" onClick = "updatecard(value)">Update</button>
    <button class="btn btn-dark" value="${task.taskDelete}" onClick = "deletecard(value)">Delete</button>
    </div>
    </div>`;
    document.querySelector("#allcards").appendChild(card).innerHTML =  clutter;
    console.log("card created of id card: "+ task.taskDelete);
}
