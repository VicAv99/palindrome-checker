$(document).ready(function() {
  $('.balloon').html('Hello! Go ahead and type something...');
  $('.pal-button').on('click', function() {
    var palindrome = $('input').val();
    var regex = /[\W_]/g;
    var lowerCase = palindrome.toLocaleLowerCase().replace(regex, '');
    var reverse = lowerCase.split('').reverse().join('');

    if (reverse === lowerCase) {
      var message = `${palindrome} is a palindrome. <br/> Oh Snap!`;
      $('.balloon').html(message);
      $('#palindromeInput').val('');
    } else {
      var message = `${palindrome}!?? What is this?!!`;
      $('.balloon').html(message);
      $('#palindromeInput').val('');
    }
  });
});
