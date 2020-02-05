import { Weekday } from './../src/weekday';
import { Date } from './../src/weekday';
import { exportAllDeclaration } from '@babel/types';

// describe ('Weekday', () => {
  
//   test('should correctly create a weekday object with date', () => {
//     var weekday = new Weekday("1-1-2020");
//     expect(weekday.date1).toEqual("1-1-2020");
//   });
// });

describe ('Date', () => {
  test('should correctly create a date object with three properties', () => {
    var date = new Date(1-1-2020)
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(2020);
  });

});