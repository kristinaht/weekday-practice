
export function UserDate(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
}

UserDate.prototype.checkType = function () {
  if(this.day < 32 && this.month < 13 &&  this.year > 1000) {
    return true;
  }else {
    return false;
  }
}
