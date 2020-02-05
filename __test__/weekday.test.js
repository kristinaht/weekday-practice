import { Weekday } from './../src/weekday';
import { exportAllDeclaration } from '@babel/types';

describe ('Weekday', () => {
  
  test('should correctly create a weekday object with date', () => {
    var weekday = new Weekday(1-1-2020);
    expect(weekday.date1).toEqual(1-1-2020);
  });

});