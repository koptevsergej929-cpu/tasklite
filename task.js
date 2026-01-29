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
