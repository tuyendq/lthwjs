// Return current date time as YYYYMMDDHHMMSS
function getDateTime() {
    let now = new Date();
    let currentDate = now.getFullYear().toString() + now.getMonth() + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds();
    return currentDate;
}

console.log(getDateTime());