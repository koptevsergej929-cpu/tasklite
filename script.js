// const now = new Date();
// console.log(now);

// const day = now.getDate();
// const month = now.getMonth() + 1;
// const year = now.getFullYear();


// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();

// console.log(`${day}.${month}.${year}.${hours}.${minutes}.${seconds}`);
// console.log(now.toLocaleString());

// console.log("----------------------------------------------------------");

const D = new Date().getHours();

function watch(){
    if (D >= 6 && D < 12){
        return "Утро";
    } else if (D >= 12 && D < 18){
        return "День";
    } else if (D >= 18 && D < 24){
        return "Вечер";
    } else {
        return "Ночь";
    }
}
console.log(watch());