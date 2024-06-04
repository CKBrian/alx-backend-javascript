
/**
 * A function to display a message to the console.
 *
 * @param {string} message - The message to be displayed.
 */
const displayMessage = (message) => {
  process.stdout.write(message + '\n');
};
const messages = [
  'Welcome to Holberton School, what is your name?',
  'Your name is:',
  'This important software is now closing'
];

displayMessage(messages[0]);
process.stdin.on('data', (data) => {
  displayMessage(`${messages[1]} ${data.toString().trim()}`);
});

process.on('SIGINT', () => {
  displayMessage(messages[2]);
  process.exit();
});
