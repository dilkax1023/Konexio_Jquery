$(document).ready(function () {
  $('.btn').on('click', function () {
    if ($('input').val().length > 5) {
      $('input').addClass('is-invalid');
    }
  });
});
