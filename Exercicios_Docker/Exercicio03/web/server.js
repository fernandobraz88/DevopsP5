const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: 6379
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

app.get('/', async (req, res) => {
  redisClient.incr('visits', (err, visits) => {
    if (err) return res.status(500).send('Redis error');
    res.send(`Número de visitas: ${visits}`);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
