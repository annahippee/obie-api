import {
  Router,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { validatePayload } from '../../utils';
import Joi from 'joi';
import { carrierServiceInstance } from '../../dependencyInjection';
import { Carrier, StateCode, TypeOfInsurance } from '../../types';

export type ResponseBody = Carrier[];

export type Query = {
  stateCode: StateCode;
  insuranceType: TypeOfInsurance;
};

export type Request = ExpressRequest<
  unknown,
  ResponseBody,
  unknown,
  Partial<Query>
>;

export type Response = ExpressResponse<ResponseBody>;

export const queryValidation = Joi.object<Query>({
  stateCode: Joi.string().required(),
  insuranceType: Joi.string().required(),
});

export const getCarriersByStateAndInsuranceType: Router = Router({
  mergeParams: true,
}).use(
  validatePayload({
    query: queryValidation,
  }),
  (req: Request, res: Response) => {
    const { stateCode, insuranceType } = <Query>req.query;
    const carriers = carrierServiceInstance.getFilteredCarriers({
      stateCode: stateCode,
      insuranceType: insuranceType,
    });
    res.send(carriers);
  },
);
