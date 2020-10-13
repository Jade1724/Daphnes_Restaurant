$(function () {

  $("#menuBarToggler").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarButtons").collapse('hide');
    }
  });
  $("menuBarToggler").click(function (event) {
    $(event.target).focus();
  });
});
