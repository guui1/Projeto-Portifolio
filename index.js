$(function () {
  var ex = $(".ex1");
  $(".ex1").hide();
  $(".ev1").click(function () {
      ex.show("slow");
    })
     $(".ex1").focusout(function () {
  $(this).hide("slow");
     });
});
