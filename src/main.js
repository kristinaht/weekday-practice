import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Weekday } from './weekday';
import { userDate } from './weekday';
import { convertDayName} from './weekday';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputtedDay = $("input#day").val();
    var inputtedMonth = $("input#month").val();
    var inputtedYear = $("input#year").val();

    var inputtedUserDate = new UserDate(inputtedDay, inputtedMonth, inputtedYear);
    console.log(inputtedUserDate);



  });
});