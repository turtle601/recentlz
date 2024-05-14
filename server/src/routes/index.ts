import { Router } from 'express';

import videoInfo from './info';
import chart from './chart';

const routers = Router();

routers.use('/info', videoInfo);
routers.use('/chart', chart);

export default routers;
