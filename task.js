// let title = ""

// if (title === ""){
//     console.log("Название задачи не указана");
// }else{
//     console.log("Задача", title);
// }

//let tasks = 5

//if (tasks === 0){
//console.log("Нету задач");
//}else if(tasks <= 3){
//    console.log("Мало задач");
//}else{
//    console.log("Много задач");
//}

// let amount = 0;

// if (amount == 0){
//     console.log("Корзина пуста");
// }else if (amount <= 1000){
//     console.log("Скидки не применяются");
// }else if (amount >= 1000, amount <= 5000){
//     console.log("Скидка 5%");
// }else {
//     console.log("Скидка 10%");
// }


// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 4));
// console.log(sum(10, 5));

// function isTaskDone(status) {
//     return status === "выполнена";
// }
// console.log(isTaskDone("выполнена"));
// console.log(isTaskDone("активна"));

// function taskSum(total, done){
//     let active = total - done
//     return "Всего: " + total + " | выполнено: " + done + " | Активных: " + active
// }
// console.log(taskSum(5, 3));
// console.log(taskSum(10, 4));

// let cities = ["Тюмень", "Мурманск", "Юровка", "Пермь"];

// console.log(cities[2]);

// let task = {
//     id: 1,
//     title: "Вася во всём виноват",
//     status: "активна"
// };

// console.log(task.status);

// let tasks1 = [
//     {id: 1, title: "Вася не в сём не виноват", status: "активна"},
//     {id: 2, title: "Позвонить врачу", status: "выполнена"},
//     {id: 3, title: "Сдать Афину в психушку", status: "активна"}
// ];

// tasks1.push({id: 4, title: "Прогулка", status: "активна"});

// console.log(tasks1);
// console.log(task.title.length);

// console.log("--------------------------------");

// const abs = [
//   {id: 1, title: "ходить"},
//   {id: 2, title: "бегать"},
//   {id: 3, title: "ходить"}
// ];

// function FindTaskByTitle(tasks, title){
//   for (let i = 0; i < tasks.length; i++){
//     if (tasks[i].title === title){
//       return tasks[i]
//     }
//   }
//   return "Задача не найдена"
// }

// FindTaskByTitle(abs, "ходить")

// console.log("---------------------------------");

// const tasks = [
//         {id: 1, title: "Делать уроки из КОД", status: "false"},
//         {id: 2, title: "Гулять с друзьями", status: "true"},
//         {id: 3, title: "Читать книги", status: "false"}
//     ];
// console.log(FindTaskByTitle(tasks, "Найти кота"));
// console.log(FindTaskByTitle(tasks, "Читать книги"));

// console.log("----------------------");

// function FilterByStatus(tasks, status){
//     return tasks.Filter(function (task){
//         return task.status === status
//     });
// }

// let tasks2 = [
//   { id: 1, title: "Купить молоко", status: "активна" },
//   { id: 2, title: "Позвонить врачу", status: "выполнена" },
//   { id: 3, title: "Сходить на тренировку",  status: "активна" },
//   {id: 4, title: "Прочитать книгу", status: "проваленна"},
//   {id: 5, title: "Прийти на урок", status: "активна"}
// ];

// console.log(FilterByStatus(tasks2, "активна"));

// function sortByTitle(tasks){
//     tasks.sort(function (a, b){
//         return a.title.localeCompare(b.title)
//     })
//     return tasks
// }

// console.log(sortByTitle(tasks2));

// function searchByTitle (tasks, query){
//     let q = String (query).toLowerCase();
//     return tasks.Filter(function (task){
//         return task.title.toLowerCase().indexof(q) !== -1
//     })
// }

// console.log(searchByTitle(tasks2, "купить"));

// function removeTaskById(tasks, id){
//     return tasks.Filter(function (task){
//         return task.id !== id;
//     });
// }

// console.log(removeTaskById(tasks2, 2));

// console.log("----------------------------");

// let tasks3 = [
//   { id: 1, title: "Купить молоко", status: "активна" },
//   { id: 2, title: "Позвонить врачу", status: "выполнена" },
//   { id: 3, title: "Сходить на тренировку",  status: "активна" },
//   {id: 4, title: "Прочитать книгу", status: "проваленна"},
//   {id: 5, title: "Прийти на урок", status: "активна"}
// ];

// for(let i = 0; i < tasks3.length; i++){
//     console.log(tasks3[i].id + ":", tasks3[i].title);
// }

// for(let title of tasks3){
//     console.log(title.id + ":", title.title);
// }

// let i = 0;
// let total = 0;
// let done = 0;
// let active = 0;

// while(i < tasks3.length){
//     total++
//     if(tasks3[i].status === "выполнена"){
//         done++
//     }else{
//         active++
//     }
//     i++
// }

// console.log("Всего", total, "| Активных:", active);

// for (let task of tasks3){
//     if (task.status === "Активна");
// }

// console.log("Активная задача", task.title);

// console.log("----------------------homework------->>>--------");

// function FindTaskByKeyword(tasks, keyword){
//     if (!keyword || typeof keyword !== "string" || keyword.trim() === ""){
//         return "Задача не найдена";
//     }

//     const key = keyword.toLowerCase();
//     const found = tasks.find(task => {
//         return typeof task.title === "string" && task.title.toLowerCase().includes(key);
//     })
// }
// const tasks3 = [
//   { id: 1, title: "Купить молоко", status: "активна" },
//   { id: 2, title: "Позвонить врачу", status: "выполнена" },
//   { id: 3, title: "Сходить на тренировку",  status: "активна" },
//   {id: 4, title: "Прочитать книгу", status: "проваленна"},
//   {id: 5, title: "Прийти на урок", status: "активна"}
// ];

// console.log(FindTaskByKeyword(tasks, "Купить"));

// console.log("------------------------------------------------");

function renderTask(taskData) {
const input = document.querySelector('.form-add__input')
const addButton = document.querySelector('.form-add__button')
const container = document.querySelector('.tasks')
// const task = document.createElement('div')
// task.classList.add('task')


// const content = document.createElement('div')
// content.classList.add('task__content')
// task.append(content)

// const title = document.createElement('div')
// title.classList.add('task__title')

// const meta = document.createElement('div')
// meta.classList.add('task__meta')

// content.append(title, meta)


// const actions = document.createElement('div')
// actions.classList.add('task__actions')
// task.append(actions);

// const editBtn = document.createElement('button')
// editBtn.classList.add('task__action', 'task__action--edit')
// editBtn.title = 'Редактировать'
// editBtn.innerHTML =`
// <svg class="task__icon" viewBox="0 0 24 24" fill="none"
// stroke="#6f64a3" stroke-width="2"
// stroke-linecap="round" stroke-linejoin="round">
// <path d="M12 20h9" />
// <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5
// 3.5z" />
// </svg>
// `


// const deleteBtn = document.createElement('button')
// deleteBtn.classList.add('task__action', 'task__action--delete')
// deleteBtn.title = 'Удалить'
// deleteBtn.innerHTML = `
// <svg class="task__icon" viewBox="0 0 24 24" fill="none"
// stroke="#cb6e6e" stroke-width="2"
// stroke-linecap="round" stroke-linejoin="round">
// <polyline points="3 6 5 6 21 6" />
// <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
// <path d="M10 11v6" />
// <path d="M14 11v6" />
// <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
// </svg>
// `


// actions.append(editBtn, deleteBtn)
// task.append(content, actions)

return task
}

const container = document.querySelector('main')

const task1 = renderTask({
    text: "Сходить на прогулку",
    data: "30.02.2050"
})

const task2 = renderTask({
    text: "Попить чай",
    data: "30.03.2025"
})

container.append(task1, task2)

const searchinput = document.querySelector('.toolbar__search')
const footer = document.querySelector('.footer-controls')
const sortSelect = document.querySelector('.toolbar__sort')


let tabButtons = document.querySelectorAll('.tabs__item')
let clearButton = document.querySelector('.footer-controls__clear')



const tasks = [
  { text: 'Купить продукты', done: false, date: 'Сегодня, 12:00' },
  { text: 'Объявим мир', done: true, date: 'Сегодня, 22:00' },
];

// console.log("---------------------------------------------")

function renderTasks() {
const task = document.createElement('div')
task.classList.add('task')


const content = document.createElement('div')
content.classList.add('task__content')
task.append(content)

const title = document.createElement('div')
title.classList.add('task__title')

const meta = document.createElement('div')
meta.classList.add('task__meta')

content.append(title, meta)


const actions = document.createElement('div')
actions.classList.add('task__actions')
task.append(content, actions);

const editBtn = document.createElement('button')
editBtn.classList.add('task__action', 'task__action--edit')
editBtn.title = 'Редактировать'
editBtn.innerHTML =`
<svg class="task__icon" viewBox="0 0 24 24" fill="none"
stroke="#6f64a3" stroke-width="2"
stroke-linecap="round" stroke-linejoin="round">
<path d="M12 20h9" />
<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5
3.5z" />
</svg>
`


const deleteBtn = document.createElement('button')
deleteBtn.classList.add('task__action', 'task__action--delete')
deleteBtn.title = 'Удалить'
deleteBtn.innerHTML = `
<svg class="task__icon" viewBox="0 0 24 24" fill="none"
stroke="#cb6e6e" stroke-width="2"
stroke-linecap="round" stroke-linejoin="round">
<polyline points="3 6 5 6 21 6" />
<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
<path d="M10 11v6" />
<path d="M14 11v6" />
<path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
</svg>
`


actions.append(editBtn, deleteBtn)
task.append(content, actions)


  container.innerHTML = '';

   tasks.forEach((task) => {
     const item = document.createElement('div');
     item.classList.add('task');

     item.addEventListener('click', (e) => {
      if(e.target.closet('.task__action')) return
      task.done = !task.done
      renderTask()
     })

    })


    if (task.done) item.classList.add('task--done');

      const editBtn = document.createElement('button');
    editBtn.addEventListener('click', () => {
        const newText = prompt('Изменить задачу:', task.text);
        if (newText && newText.trim() !== '') {
          task.text = newText.trim();
        }

        const deleteBtn = document.createElement('button');
           deleteBtn.addEventListener('click', () => {
              const index = tasks.indexOf(task);
              tasks.splice(index, 1);
              renderTasks();
            });


     task.addEventListener('click', () => {
        task.done = !task.done;
        renderTasks()
     })


    });

}


function renderAll(){
    document.querySelectorAll('.task').forEach(t => t.remove())
    const footer = document.querySelector('.footer-controls')

    tasks.forEach(task =>{
      const card = renderTasks(task)
      footer.before(card)
    })
}


renderAll()
