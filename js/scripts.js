$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const year = parseInt($("input#year").val());
    const result = leapYear(year);

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    } 
    
    $("#result").show();
  });
});

function leapYear(year) {
  if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
