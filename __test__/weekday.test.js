import { Weekday } from './../src/weekday';
import { Date } from './../src/weekday';
import { exportAllDeclaration } from '@babel/types';

describe ('Weekday', () => {
  
  test('should correctly create a weekday object with date', () => {
    var weekday = new Weekday();
    expect(weekday.date1).toEqual([]);
  });
  
  test('should correctly add a new date to weekday object', () => {
    var weekday = new Weekday();
    var date = [1,1,1999];
    weekday.addDate(date);
    expect(weekday.date1).toEqual([date]);
    console.log(weekday.date1)
  });
});

describe ('Date', () => {
  test('should correctly create a date object with three properties', () => {
    var date = new Date(1, 1, 2020)
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(2020);
    console.log(date);
  });

  test('should determine whether inputs are not valid', () => {
    var notValid = new Date(35,40,2020);
    expect(notValid.checkType()).toEqual("date is not valid");
    console.log(notValid);
  })
});