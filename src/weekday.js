export function Weekday () {
  this.date1 = [];
} 

Weekday.prototype.addDate = function(date) {
  this.date1.push(date);
}

export function Date(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
}

Date.prototype.checkType = function () {
  if(this.day < 32 && this.month < 13 &&  this.year > 1000) {
    true;
  }else {
    return "date is not valid";
  }
}