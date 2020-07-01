$(document).ready(function () {
  $('.btn').on('click', displaySecretText);
});

function displaySecretText() {
  var text = document.querySelector('#text');
  text.style.display = 'block';
}
