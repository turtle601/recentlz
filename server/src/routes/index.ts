import { Router } from 'express';
import comments from './comments';

const routers = Router();

routers.use('/comments', comments);

export default routers;
