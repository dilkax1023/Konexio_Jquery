$(document).ready(function () {
  $('.btn').on('click', function () {
    $('#square').animate({
      right: 0,
      bottom: 0,
    });
  });
});
