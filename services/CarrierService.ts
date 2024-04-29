import { carriers, insurancePolicies } from '../db/sampleData';
import { Carrier, StateCode, TypeOfInsurance } from '../types';

interface FindCarriersInput {
  stateCode: StateCode;
  insuranceType: TypeOfInsurance;
}

export class CarrierService {
  public constructor() {}

  public findCarriersByFilters(queryInput: FindCarriersInput): Carrier[] {
    return this.getCarriers(queryInput.stateCode, queryInput.insuranceType);
  }

  private getCarriers(
    state: StateCode,
    insuranceType: TypeOfInsurance,
  ): Carrier[] {
    const filteredPolicies = insurancePolicies.filter(
      (policy) => policy.state === state && policy.type === insuranceType,
    );

    const filteredCarriers = filteredPolicies.map((policy) => {
      return carriers.find((carrier) => carrier.id === policy.carrierId);
    });

    return filteredCarriers;
  }
}
