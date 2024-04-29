import { Router } from 'express';
import { carrierRouter } from './carriers';

export const rootRouter = Router();

rootRouter.use('/carriers', carrierRouter);
