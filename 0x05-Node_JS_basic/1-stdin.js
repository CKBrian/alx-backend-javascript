
const displayMessage = require('./0-console');
const messages = [
  'Welcome to Holberton School, what is your name?',
  'Your name is:',
  'This important software is now closing'
];

displayMessage(messages[0]);
process.stdin.on('data', function (data) {
  displayMessage(`${messages[1]} ${data}`);
  displayMessage(messages[2]);
  process.exit();
});
