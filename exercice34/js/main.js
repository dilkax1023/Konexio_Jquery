$(document).ready(function () {
  $('.btn').click(function () {
    var inputVal = $('input').val();
    $.ajax({
      url: 'https://restcountries.eu/rest/v2/name/' + inputVal,
      success: function (data) {
        $('#country').html(data[0].name);
        $('#capital').text(data[0].capital);
      },
    });
  });
});
