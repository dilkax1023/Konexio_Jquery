$(document).ready(function () {
  $('.btn').click(function () {
    $.ajax({
      url: 'https://restcountries.eu/rest/v2/name/france',
      success: function (data) {
        var name = data[0].name;
        var capital = data[0].capital;
        $('#country').append(name);
        $('#capital').append(capital);
      },
    });
  });
});
