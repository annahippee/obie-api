import { Router } from 'express';
import { getCarriersByStateAndInsuranceType } from './get';

export const carrierRouter = Router();

carrierRouter.get('/', getCarriersByStateAndInsuranceType);
