import { TypeOfInsurance } from './Insurance';
import { StateCode } from './State';

export interface InsurancePolicy {
  carrierId: string;
  type: TypeOfInsurance;
  state: StateCode;
}
