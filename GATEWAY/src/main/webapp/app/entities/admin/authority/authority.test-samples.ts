import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'c4c8392b-ae5f-4596-9a2a-f6436fc55b24',
};

export const sampleWithPartialData: IAuthority = {
  name: '0f556dc9-3666-4a89-bf34-1619a012c1c7',
};

export const sampleWithFullData: IAuthority = {
  name: '6043bed8-83f4-44ff-bfe2-d02628f5fdcf',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
