let title = ""

if (title === ""){
    console.log("Название задачи не указана");
}else{
    console.log("Задача", title);
}

//let tasks = 5

//if (tasks === 0){
//console.log("Нету задач");
//}else if(tasks <= 3){
//    console.log("Мало задач");
//}else{
//    console.log("Много задач");
//}

let amount = 0;

if (amount == 0){
    console.log("Корзина пуста");
}else if (amount <= 1000){
    console.log("Скидки не применяются");
}else if (amount >= 1000, amount <= 5000){
    console.log("Скидка 5%");
}else {
    console.log("Скидка 10%");
}


function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));
console.log(sum(10, 5));

function isTaskDone(status) {
    return status === "выполнена";
}
console.log(isTaskDone("выполнена"));
console.log(isTaskDone("активна"));

function taskSum(total, done){
    let active = total - done
    return "Всего: " + total + " | выполнено: " + done + " | Активных: " + active
}
console.log(taskSum(5, 3));
console.log(taskSum(10, 4));

let cities = ["Тюмень", "Мурманск", "Юровка", "Пермь"];

console.log(cities[2]);

let task = {
    id: 1,
    title: "Вася во всём виноват",
    status: "активна"
};

console.log(task.status);

let tasks1 = [
    {id: 1, title: "Вася не в сём не виноват", status: "активна"},
    {id: 2, title: "Позвонить врачу", status: "выполнена"},
    {id: 3, title: "Сдать Афину в психушку", status: "активна"}
];

tasks1.push({id: 4, title: "Прогулка", status: "активна"});

console.log(tasks1);
console.log(task.title.length);

function FindTaskByTitle(tasks, title){
    

    for (let i = 0; i < tasks.length; i++){
        const task = tasks[i];
    }
    if (task && typeof task.title === "string" && task.title === title){
        return task;
    }
    return "Задача не найдена";
}
const tasks = [
        {id: 1, title: "Делать уроки из КОД", status: "false"},
        {id: 2, title: "Гулять с друзьями", status: "true"},
        {id: 3, title: "Читать книги", status: "false"}
    ];
console.log(FindTaskByTitle(tasks, "Найти кота"));
console.log(FindTaskByTitle(tasks, "Читать книги"));