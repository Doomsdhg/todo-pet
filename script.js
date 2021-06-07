

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
return `<form><div class="deeds">${deed.description}<input type="checkbox" onchange="done(${index})" class="done"></input><button onclick="deleteDeed(${index})" class="delete">X</button></div></form>`;
};


let fillList = () => {
    toDoList.innerHTML = "";
    if (deeds.length > 0) {
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

fillList();

let addToStorage = () => {
    localStorage.setItem('deeds', JSON.stringify(deeds));
};

done = (index) => {
    deeds[index].isCompleted = !deeds[index].isCompleted;
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