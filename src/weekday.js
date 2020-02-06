

export function Weekday () {
  this.date1 = [];
} 

Weekday.prototype.addDate = function(date) {
  // this.date1.push(date);
  this.date1 = date;
}

export function UserDate(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
}

UserDate.prototype.checkType = function () {
  if(this.day < 32 && this.month < 13 &&  this.year > 1000) {
    true;
  }else {
    return "date is not valid";
  }
}

var weekday =new Weekday();

var findDate = new Date ((weekday.date1).toString());
var findWeekday = findDate.getDay();

export function convertDayName(findWeekday){
  if(findWeekday === 0){
    return "Sunday";
  }else if(findWeekday === 1){
    return "Monday";
  }else if(findWeekday === 2){
    return "Tuesday";
  }else if(findWeekday === 3){
    return "Wednesday";
  }else if(findWeekday === 4){
    return "Thursday";
  }else if(findWeekday === 5){
    return "Friday";
  }else{
    return "Saturday";
  }
}