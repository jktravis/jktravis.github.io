require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
require('bootstrap');
require('../css/main.scss');

$("#term1").typed({
  strings: ["Hello, stranger! Welcome to my " +
  "<a href=\"http://www.freecodecamp.com/challenges/zipline-build-a-personal-portfolio-webpage\">" +
  "FCC profile page</a>.<br>> ^2000" +
  "Let me tell you a little about myself.<br>> ^2000" +
  "I have ~10 years in IT, and have dabbled in various<br>> web and programming languages.<br>> ^2000" +
  "I currently work with integrations and enterprise<br>> apps, but enjoy doing web stuff.<br>>" +
  "^2000<br>> Well, that's pretty much it for now.<br>> ^2000" +
  "Thanks for stoping by!"],
  typeSpeed: 40,
  backDelay: 30000,
  backSpeed: 20,
  loop: false,
  showCursor: true,
  cursorChar: '_',
  contentType: 'html'
});
