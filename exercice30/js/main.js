$(document).ready(function () {
  $('input').on('keyup', function () {
    if ($('input').val().length > 5) {
      $(this).addClass('is-invalid');
    }
  });
});
