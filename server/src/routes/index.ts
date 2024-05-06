// example files
import express from 'express';
import hello from './hello';

const routers = express.Router();

routers.get('/', (req, res) => {
  res.json({
    message: 'Root API',
  });
});

routers.use('/hello', hello);

export default routers;
