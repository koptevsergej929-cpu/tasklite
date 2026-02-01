let title = ""

if (title === ""){
    console.log("Название задачи не указана");
}else{
    console.log("Задача", title);
}

let tasks = 5

if (tasks === 0){
    console.log("Нету задач");
}else if(tasks <= 3){
    console.log("Мало задач");
}else{
    console.log("Много задач");
}

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