// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var savedToDo = [];
var saveButton = $(':button');
var singleTime;
var today = dayjs().format('dddd: MMMM D');
$('#currentDay').text(today);


 function saveList(){

for (x=0; x < 5; x++){
var hour = $('#textarea0');
console.log(hour.value);
}

savedToDo = $('#textAreaGroup textarea')
  .map(function(){
    return $(this).val();
  })

  console.log(savedToDo);
  localStorage.setItem("savedToDo", JSON.stringify(savedToDo));
}
saveButton.on('click', saveList);

window.onload = function recalText(){{
  if (JSON.parse(localStorage.getItem("savedToDo") !== null)){
    console.log("working");
    savedToDo = JSON.parse(localStorage.getItem("savedToDo"));
      var hour0 = savedToDo[0];
      var hour1 = savedToDo[1];
      var hour2 = savedToDo[2];
      var hour3 = savedToDo[3];
      var hour4 = savedToDo[4];
      var hour5 = savedToDo[5];
      var hour6 = savedToDo[6];
      var hour7 = savedToDo[7];
      var hour8 = savedToDo[8];
      
      document.getElementById('textarea0').value = hour0;
      document.getElementById('textarea1').value = hour1;
      document.getElementById('textarea2').value = hour2;
      document.getElementById('textarea3').value = hour3;
      document.getElementById('textarea4').value = hour4;
      document.getElementById('textarea5').value = hour5;
      document.getElementById('textarea6').value = hour6;
      document.getElementById('textarea7').value = hour7;
      document.getElementById('textarea8').value = hour8;
      timeOfDay();
  }
}};

function checkTime() {
  var time = parseInt(dayjs().format('H'));

  var calendarTime = document.querySelectorAll('.time-block');
  // console.log(calendarTime[0]);

  // var newCalendarTime = Array.from(calendarTime);
  // console.log(newCalendarTime[0]);

  for (var x=0; x < calendarTime.length ;x++){ 
    var singleTime= parseInt(calendarTime[x].getAttribute('id').split('-')[1]);
    // console.log(singleTime);
    var element = $(calendarTime[x]);
    element.removeClass('past present future');
    if (time > singleTime){
      console.log('PAST ELEMENT:', element);
      element.addClass('past');
    }
    if (time === singleTime){
      console.log("PRESENT ELEMENT:", element);
      element.addClass('present');
    }
    if (time < singleTime){
      console.log("PRESENT ELEMENT:", element);
      element.addClass('future');
    }
  }
 
}

function timeOfDay(){
  var timeCheck = setInterval(checkTime, 60000)
}


