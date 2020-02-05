export function Weekday (date1) {
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