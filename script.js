const now = new Date();
console.log(now);

const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();


const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(`${day}.${month}.${year}.${hours}.${minutes}.${seconds}`);
console.log(now.toLocaleString());

function FormatDate(date) {
    const d = date.getDate().toString().padStart[2, '0'];
    const m = (date.getMonth() + 1).toString().padStart[2, '0'];
    const y = date.getFullYear();

}