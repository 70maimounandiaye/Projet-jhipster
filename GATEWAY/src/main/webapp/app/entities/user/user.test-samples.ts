import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 8994,
  login: 'aF@3M\\\\bYEGi\\2nJvu\\r0\\udD3-\\W7',
};

export const sampleWithPartialData: IUser = {
  id: 1554,
  login: '.=?9$b@zS',
};

export const sampleWithFullData: IUser = {
  id: 22413,
  login: 'y',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
