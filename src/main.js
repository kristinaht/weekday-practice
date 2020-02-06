import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { UserDate } from './weekday';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    let inputtedDay = $("input#day").val();
    let inputtedMonth = $("input#month").val();
    let inputtedYear = $("input#year").val();

    let inputtedUserDate = new UserDate (inputtedDay, inputtedMonth, inputtedYear);
   
    console.log(inputtedUserDate);

    let array = ([inputtedMonth, inputtedDay, inputtedYear]).toString();
    console.log(array);
    var d = new Date(array);
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
   let type = inputtedUserDate.checkType();

  //  let array2 = ([inputtedMonth, inputtedYear]).toString();
   let y = new Date(inputtedYear, inputtedMonth, 0);

   let daysInMonth = y.getDate();
 

  //  let getDaysInMonth = function(inputtedMonth, inputtedYear){
  //   new Date(inputtedYear, inputtedMonth, 0).getDate()
  //   };
    console.log(daysInMonth);
    console.log(inputtedMonth);

    if(!type || inputtedDay > daysInMonth){
      $("#output").text("Date is not valid");
    } else{
      $("#output").text(days[d.getDay()]);
    }
  
    


    // console.log(d.getDay());
  });
});