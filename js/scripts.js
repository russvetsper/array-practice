var things = [];
var newList = [];
var answer1 = '';
var answer2 = '';
var answer3 = '';
var answer4 = '';
var answer5 = '';

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    answer1 = $("#one").val();
    answer2 = $("#two").val();
    answer3 = $("#three").val();
    answer4 = $("#four").val();
    answer5 = $("#five").val();
    things.push(answer1 , answer2 ,answer3 ,answer4 , answer5);
    newList.push(things[1],things[0],things[2]);
    newList.push(things[0], things[1], things[2], things[3], things[4]);
    $("#resultList").html(
      "<h1>HERE IS YOUR LIST.</h1>" +
      "<li>" + newList[0] + "</li>" +
      "<li>" + newList[1] + "</li>" +
      "<li>" + newList[2] + "</li>" +
      "<li>" + newList[3] + "</li>" +
      "<li>" + newList[4] + "</li>" +
      "<li>" + newList[5] + "</li>" +
      "<li>" + newList[6] + "</li>" +
      "<li>" + newList[7] + "</li>"
    );
  });
});
