const formElement = document.getElementById("form");
const listElement = document.getElementById("tasks-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");

const tasks = [];

const clearList = function () {
  while (listElement.hasChildNodes()) { 
    listElement.firstChild.remove();
  }
}
const clearOne = function () {
    if (listElement.hasChildNodes()) {
      listElement.firstChild.remove();
    }
  }

function clearInputs(event) {
  event.target.task.value = "";
}

clearBtnElement.addEventListener('click', clearList);
clearOneBtnElement.addEventListener('click', clearOne);

let counter = 1;
formElement.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const toDo = {
    task: event.target.task.value,
    date: event.target.date.value
  };
  const liElement = document.createElement('li');
  liElement.textContent = `${counter}. ${toDo.date}: ${toDo.task}`;
  liElement.onclick = () => {
    if (liElement.style.textDecoration === "line-through") {
        liElement.textContent = `\u2713 ${toDo.date}: ${toDo.task}`;
      liElement.style.textDecoration = "none";
    
    } else {
      liElement.style.textDecoration = "line-through";
      liElement.textContent = `\u2713 ${toDo.date}: ${toDo.task}`;
    }
  };
  listElement.append(liElement);
  clearInputs(event);
  counter++;
});