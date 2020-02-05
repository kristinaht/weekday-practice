import { Weekday } from './../src/weekday';
import { userDate } from './../src/weekday';
import { convertDayName } from './../src/weekday';
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
    console.log(weekday.date1);
  });


  test('should convert array to string', () => {
    var weekday = new Weekday();
    var date = [1,1,2019];
    weekday.addDate(date);
    var findDate =((weekday.date1).toString());
   expect(findDate).toEqual("1,1,2019");
   console.log(findDate);
  });

  test('should take a date and return as a weekday number', () => {
    var weekday = new Weekday();
    var date = [1,1,2019];
    weekday.addDate(date);
    var findDate =new Date ((weekday.date1).toString());
    var findWeekday = findDate.getDay();
   expect(findWeekday).toEqual(2);
   console.log(findWeekday);
  });
});

describe ('userDate', () => {
  test('should correctly create a date object with three properties', () => {
    var date = new userDate(1, 1, 2020)
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(2020);
    console.log(date);
  });

  test('should determine whether inputs are not valid', () => {
    var notValid = new userDate(35,40,2020);
    expect(notValid.checkType()).toEqual("date is not valid");
    console.log(notValid);
  });


});

describe ('convertDayName', () =>{
  
  test('should convert findWeekday value from number to weekday name', () =>{
    var findWeekday = 2;
    expect(convertDayName(findWeekday)).toEqual("Tuesday");
    console.log(convertDayName(findWeekday));
  });
});