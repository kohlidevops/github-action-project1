const http = require('http');

let server;
beforeAll(() => {
  server = require('../src/index');
});

afterAll((done) => {
  server.close(done);
});

test('health endpoint returns ok', (done) => {
  http.get('http://localhost:3000/health', (res) => {
    let data = '';
    expect(res.statusCode).toBe(200);
    res.on('data', chunk => (data += chunk));
    res.on('end', () => {
      const json = JSON.parse(data);
      expect(json.status).toBe('ok');
      done();
    });
  });
});
