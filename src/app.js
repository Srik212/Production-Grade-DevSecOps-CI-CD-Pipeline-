const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'devsecops-api'
  });
});

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from my DevSecOps pipeline!'
  });
});

module.exports = app;
