const http = require('http');

const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node app!\n');
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
