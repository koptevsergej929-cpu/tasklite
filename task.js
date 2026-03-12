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

// function renderTask(taskData) {
// const input = document.querySelector('.form-add__input')
// const addButton = document.querySelector('.form-add__button')
// const container = document.querySelector('.tasks')

// const searchinput = document.querySelector('.toolbar__search')
// const footer = document.querySelector('.footer-controls')
// const sortSelect = document.querySelector('.toolbar__sort')
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

// return task
// }

// const container = document.querySelector('main')

// const task1 = renderTask({
//     text: "Сходить на прогулку",
//     data: "30.02.2050"
// })

// const task2 = renderTask({
//     text: "Попить чай",
//     data: "30.03.2025"
// })

// container.append(task1, task2)




// let tabButtons = document.querySelectorAll('.tabs__item')
// let clearButton = document.querySelector('.footer-controls__clear')



// const tasks = [
//   { text: 'Купить продукты', done: false, date: 'Сегодня, 12:00' },
//   { text: 'Объявим мир', done: true, date: 'Сегодня, 22:00' },
//   { text: 'Прибраться дама', done: true, date: 'Сегодня, 12:00' },
//   { text: 'Сделать уроки', done: false, date: 'Сегодня, 18:47' },
//   { text: 'Сходить к врачу', done: false, date: 'Сегодня, 20:37' },
//   { text: 'Позвонить сесте', done: true, date: 'Сегодня, 15:25' },
//   { text: 'Заполнить журнал', done: true, date: 'Сегодня, 10:15'}
// ];

// console.log("---------------------------------------------")

const input = document.querySelector(".form-add__input");
const addButton = document.querySelector(".form-add__button");
const container = document.querySelector(".tasks");
const form = document.querySelector('.form-add')
const tabButtons = document.querySelectorAll('.tab__item');

const searchInput = document.querySelector(".toolbar__search");
const footer = document.querySelector(".footer-controls");
const sortSelect = document.querySelector(".toolbar__sort");
let tasks = []




form.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = input.value.trim()
  
  if (text === '' || text.length < 3) {
    input.classList.add('input--error')
    return
  } else {
    input.classList.remove('input--error')
  }

  const newTask = {
    id: tasks.length + 1,
    text: text,
    done: false,
    date: formatDate(new Date())
  }
  tasks.push(newTask)
  input.value = ''
  renderAll()
})

function renderTask(task) {
  const item = document.createElement("div");
  item.classList.add("task");

  const content = document.createElement("div");
  content.classList.add("task__content");

  const title = document.createElement("div");
  title.classList.add("task__title");
  title.textContent = task.text;

  const meta = document.createElement("div");
  meta.classList.add("task__meta");
  meta.textContent = task.date;
  content.append(title, meta);

  const actions = document.createElement("div");
  actions.classList.add("task__actions");

  const editBtn = document.createElement("button");
  editBtn.classList.add("task__action", "task__action--edit");
  editBtn.innerHTML = `
<svg
              class="task__icon"
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="#6f64a3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20h9" />
              <path
                d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
              />
            </svg>
`;

  editBtn.addEventListener('click', () => {
    const newText = prompt('Изменить задачу:', task.text);
    if (newText && newText.trim() !== '') {
      task.text = newText.trim();
      renderAll();
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("task__action", "task__action--delete");
  deleteBtn.innerHTML = `
<svg
              class="task__icon"
              viewBox="0 0 24 24"
              width="14 "
              height="14"
              fill="none"
              stroke="#cb6e6e"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>`;

  deleteBtn.addEventListener("click", () => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);

    renderAll()
  });

  actions.append(editBtn, deleteBtn);
  item.append(content, actions);

  if (task.done) {
    item.classList.add("task--done");
  }

  item.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.closest(".task__action")) return;
    task.done = !task.done;
    renderAll()
  });

  return item;
}




function renderAll() {
  container.innerHTML = ''

  let filtered = tasks.filter(task =>{
    if (currentFilter === 'active') return !task.done;
    if (currentFilter === 'done') return task.done;
    return true;
  });

  const query = searchInput.value.trim().toLowerCase();
  if (query){
    filtered = filtered.filter(task => 
      task.text.toLowerCase().includes(query)
    );
  }
  
  const sortedTasks = [...tasks].sort((a, b) => {
    if(sortOrder === 'new') return b.id - a.id
    if(sortOrder === 'old') return a.id - b.id
    if(sortOrder === 'az') return a.text > b.text ? 1 : -1
    if(sortOrder === 'za') return a.text < b.text ? 1 : -1
    return a.id - b.id
  })
  
  sortedTasks.forEach(task => {
    const card = renderTask(task)
    container.append(card)
  })
}

searchInput.addEventListener('input', renderAll);

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('tabs__item--active'));
    btn.classList.add('tabs__item--active');
      if (btn.textContent.includes('Активные')) currentFilter = 'active';
        else if (btn.textContent.includes('Заверш')) currentFilter = 'done';
       else currentFilter = 'all';
  });
});


renderAll()

function formatDate(date){
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const hour = date.getHours().toString().padStart(2, '0')
  const min = date.getMinutes().toString().padStart(2, '0')
  return `${day}.${month}.${year}, ${hour}:${min}`
}

let sortOrder = 'new';
sortSelect.addEventListener('change', () => {
  const val = sortSelect.value
  if(val.includes('новые')) sortOrder = 'new'
  else if (val.includes('старые')) sortOrder = 'old'
  else if(val.includes('A-Z')) sortOrder = 'az'
  else if(val.includes('Z-A')) sortOrder = 'za'
  renderAll()
})

let currentFilter = 'all'