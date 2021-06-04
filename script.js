let toDoList = document.getElementById("tasks-wrapper"),
    btn = document.getElementById("button"),
    action = document.getElementById("whatToDo"),
    wrapper = document.getElementById("wrapper"),
    deeds = [];

localStorage.deeds ? deeds = JSON.parse(localStorage.getItem('deeds')) : deeds = [];

class aim = {
    constructor(description) {
        this.description = description;
        this.isCompleted = false;
    }
}

deeds.forEach((element) => {
    wrapper.innerHTML += `<form><div class="deeds">${element.description}<button class="done">✓</button><button class="delete">X</button></div></form>`;
});

let update = () => {
    localStorage.setItem('deeds', JSON.stringify(deeds));
};

btn.addEventListener("click", () => {
let message = action.value;
let task = new aim(message);
deeds.push(task);
update();
})