
function indexOfMax(array){

  var max = array[0];
  var maxIndex = 0;

  for (i = 1; i < array.length; i++) {
    if (array[i] > max) {
      maxIndex = i;
      max = array[i];
    }
  }
  return maxIndex;
}

$(document).ready(function(){
  $("form#user-input").submit(function(event){
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("input:radio[name=question5]:checked").val();
    var q6 = $("input:radio[name=question6]:checked").val();

    var answer = [q1, q2, q3, q4, q5, q6];

    var china = 0;
    var mexico = 0;
    var england = 0;
    var canada = 0;
    var germany = 0;

    for (i = 0; i < 6; i++) {
      if (answer[i] === "china1") {
        china++;
      } else if (answer[i] === "mexico1") {
        mexico++;
      } else if (answer[i] === "england1") {
        england++;
      } else if (answer[i] === "canada1") {
        canada++;
      } else if (answer[i] === "germany1") {
        germany++;
      }
    }

    var tally = [china, mexico, england, canada, germany];

    var vacationResult = indexOfMax(tally);
    $("form").hide();
    $(".header").hide();
    $('html,body').scrollTop(0);
    if (vacationResult === 0) {
      $("#china").show();
    } else if (vacationResult === 1) {
      $("#mexico").show();
    } else if (vacationResult === 2) {
      $("#england").show();
    } else if (vacationResult === 3) {
      $("#canada").show();
    } else if (vacationResult === 4) {
      $("#germany").show();
    }
    event.preventDefault();
  });
});
