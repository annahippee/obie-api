import { v4 as uuidv4 } from 'uuid';
import { InsurancePolicy, StateCode, TypeOfInsurance } from '../types';

const allstate = {
  id: uuidv4(),
  name: 'Allstate',
};
const founders = {
  id: uuidv4(),
  name: 'Founders',
};
const guard = {
  id: uuidv4(),
  name: 'Guard',
};
const hippo = {
  id: uuidv4(),
  name: 'Hippo',
};
const lemonade = {
  id: uuidv4(),
  name: 'Lemonade',
};
const nationwide = {
  id: uuidv4(),
  name: 'Nationwide',
};
const progressive = {
  id: uuidv4(),
  name: 'Progressive',
};
const seneca = {
  id: uuidv4(),
  name: 'Seneca',
};
const swyfft = {
  id: uuidv4(),
  name: 'Swyfft',
};
const nationalGeneral = {
  id: uuidv4(),
  name: 'National General',
};
const neptune = {
  id: uuidv4(),
  name: 'Neptune',
};
const typTap = {
  id: uuidv4(),
  name: 'TypTap',
};

export const carriers = [
  {
    id: allstate.id,
    name: 'Allstate',
  },
  {
    id: founders.id,
    name: 'Founders',
  },
  {
    id: guard.id,
    name: 'Guard',
  },
  {
    id: hippo.id,
    name: 'Hippo',
  },
  {
    id: lemonade.id,
    name: 'Lemonade',
  },
  {
    id: nationwide.id,
    name: 'Nationwide',
  },
  {
    id: progressive.id,
    name: 'Progressive',
  },
  {
    id: seneca.id,
    name: 'Seneca',
  },
  {
    id: swyfft.id,
    name: 'Swyfft',
  },
  {
    id: nationalGeneral.id,
    name: 'National General',
  },
  {
    id: neptune.id,
    name: 'Neptune',
  },
  {
    id: typTap.id,
    name: 'TypTap',
  },
];

export const insurancePolicies: InsurancePolicy[] = [
  // ALLSTATE
  {
    carrierId: allstate.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IN,
  },
  {
    carrierId: allstate.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IL,
  },
  {
    carrierId: allstate.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  {
    carrierId: allstate.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IN,
  },
  // FOUNDERS
  {
    carrierId: founders.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IL,
  },
  // GUARD
  {
    carrierId: guard.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  // HIPPO
  {
    carrierId: hippo.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  {
    carrierId: hippo.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IN,
  },
  // LEMONADE
  {
    carrierId: lemonade.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IN,
  },
  {
    carrierId: lemonade.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  {
    carrierId: lemonade.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.MI,
  },
  // NATIONAL GENERAL
  {
    carrierId: nationalGeneral.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IL,
  },
  {
    carrierId: nationalGeneral.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IN,
  },
  {
    carrierId: nationalGeneral.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  {
    carrierId: nationalGeneral.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IN,
  },
  {
    carrierId: nationalGeneral.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.MI,
  },
  {
    carrierId: nationalGeneral.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.MI,
  },
  {
    carrierId: nationalGeneral.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.IN,
  },
  {
    carrierId: nationalGeneral.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.IL,
  },
  // NATIONWIDE
  {
    carrierId: nationwide.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IN,
  },
  {
    carrierId: nationwide.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  {
    carrierId: nationwide.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.MI,
  },
  {
    carrierId: nationwide.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IN,
  },
  {
    carrierId: nationwide.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IL,
  },
  {
    carrierId: nationwide.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.MI,
  },
  {
    carrierId: nationwide.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.IL,
  },
  {
    carrierId: nationwide.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.IN,
  },
  // PROGRESSIVE
  {
    carrierId: progressive.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IN,
  },
  {
    carrierId: progressive.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IL,
  },
  {
    carrierId: progressive.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.MI,
  },
  {
    carrierId: progressive.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  {
    carrierId: progressive.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IN,
  },
  // SENECA
  {
    carrierId: seneca.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  {
    carrierId: seneca.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IN,
  },
  {
    carrierId: seneca.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.IL,
  },
  {
    carrierId: seneca.id,
    type: TypeOfInsurance.AUTO,
    state: StateCode.MI,
  },
  {
    carrierId: seneca.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.MI,
  },
  {
    carrierId: seneca.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.IL,
  },
  {
    carrierId: seneca.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.IN,
  },
  // SWYFFT
  {
    carrierId: swyfft.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IN,
  },
  {
    carrierId: swyfft.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.IL,
  },
  {
    carrierId: swyfft.id,
    type: TypeOfInsurance.FIRE,
    state: StateCode.MI,
  },
  // NEPTUNE
  {
    carrierId: neptune.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.MI,
  },
  {
    carrierId: neptune.id,
    type: TypeOfInsurance.FLOOD,
    state: StateCode.IN,
  },
];
