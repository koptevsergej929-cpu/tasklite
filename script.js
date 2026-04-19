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

// function watch(){
//     const D = new Date().getHours();

//     if (D >= 6 && D < 12){
//         return "Утро";
//     } else if (D >= 12 && D < 18){
//         return "День";
//     } else if (D >= 18 && D < 24){
//         return "Вечер";
//     } else {
//         return "Ночь";
//     }
// }
// console.log(watch());

// // console.log("----------------------------------------------------------");

// const mini__tasks = [
//     {text: "A piace of cake"},
//     {text: "Школьный проект"},
//     {text: "ПРОЕКТ ПО ОТКРЫТИЮ ПАРКА"},
//     {text: "расмотр дизайна"},
//     {text: "Изучиить новую тему"}
// ];

// const filteredMini__Tasks = mini__tasks.filter(task => task.text.toLocaleLowerCase().includes("проект"));

// console.log("Задачи использующие слово проект:");
// console.log(filteredMini__Tasks);

// function delay(ms, signal){
//     return new Promise((resolve, reject) => {
//         const timeoutId = setTimeout(resolve, ms)
//         if(signal){
//             signal.addEventListener('abort', () => {
//                 clearTimeout(timeoutId)
//                 reject(new Error('Delay aborted'))
//             })
//         }
//     })
// }

// async function runSeaquential(tasks){
//     const results = []
//     for(const task of tasks){
//         results.push(aw task())
//     }
//     return results
// }

console.log("<<<<<<<<<<<<<<<<<< Homework >>>>>>>>>>>>>>>>>>>")

function normalizeWords(str) {
    const clean = String(str || "").trim();

    if (!clean) return "";

    const words = clean.split(/\s+/);

    const processedWords = words.map(word => {
        return word[0].toUpperCase() + word.split(1).toLowerCase();
    })
    return processedWords.join(" ");
}

console.log("                  ПрИвЕт           ");
console.log("  Hi                       WORLD");