import { Router } from 'express';

import { homeRouter } from '@routes/home.routes';

const router = Router();

router.use(homeRouter)

export default router;
