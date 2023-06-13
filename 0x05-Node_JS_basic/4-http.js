const http = require('http');

const app = http.createServer();
const port = 1245;

app.on('request', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;