// Import Express and Supertest
const express = require('express');
const request = require('supertest');

// Create an Express app that displays hello world
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Write a test case using Jest and Supertest
test('responds with hello world on the screen', async () => {
  // Send a GET request to the app
  const response = await request(app).get('/');
  // Expect the status code to be 200
  expect(response.statusCode).toBe(200);
  // Expect the response text to contain hello world
  expect(response.text).toContain('Hello Worlds!');
});

var server = app.listen(5000, function(){
        console.log('Running on port 5000!')
     });

afterAll(done=>{
    server.close();
    done();
});
