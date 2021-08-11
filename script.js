

let toDoList = document.getElementById("tasks-wrapper"),
    btn = document.getElementById("button"),
    action = document.getElementById("whatToDo"),
    deeds = [];
    deedsItems = [];

localStorage.deeds ? deeds = JSON.parse(localStorage.getItem('deeds')) : deeds = [];

class aim {
    constructor(description) {
        this.description = description;
        this.isCompleted = false;
    }
}


let createDiv = (deed, index) => {
return `<div class="deeds">
<div class="description">${deed.description}</div>
<div class="buttons">
<label class="custom-checkbox">
<input type="checkbox" id="checkbox${index}" onclick="done(${index})">
<span></span>
</label>
<button onclick="deleteDeed(${index})" class="delete">X</button>
</div>
</div>`;
};



let fillList = () => {
    toDoList.innerHTML = "";
    if (deeds.length > 0) {
        sort();
        deeds.forEach((item, index) => {
            toDoList.innerHTML += createDiv(item, index);
        })
    deedsItems = document.querySelectorAll(".deeds");
    deeds.forEach((item, index) => {if (item.isCompleted) {
        deedsItems[index].classList.add('isdone');
    } else {
        deedsItems[index].classList.remove('isdone');
    }
    
})
    }
};

let sort = () => {
    let allDeeds = deeds.length && deeds.filter(task => task.isCompleted == false);
    let doneDeeds = deeds.length && deeds.filter(task => task.isCompleted == true);
    deeds = [...allDeeds, ...doneDeeds];
}

/*let sort = () => {
    deeds.forEach((item, index) => {
        deedsItems = document.querySelectorAll(".deeds");
        if (deedsItems[index].classList.contains("isdone")) {
            let temp = deeds[index];
            deeds.push(temp);                
            deeds.splice(index, 1);
        }
    }
    )
}
sort();*/
fillList();

let addToStorage = () => {
    localStorage.setItem('deeds', JSON.stringify(deeds));
};

let done = (index) => {
    let chckbx = document.getElementById(`checkbox${index}`);
    if (chckbx.checked) {
    deeds[index].isCompleted = !deeds[index].isCompleted;
    }
    addToStorage();
    fillList();    
    
}

deleteDeed = (index) => {
    deeds.splice(index, 1);
    addToStorage();
    fillList();
}


btn.addEventListener("click", () => {
deeds.push(new aim(action.value));
addToStorage();
})