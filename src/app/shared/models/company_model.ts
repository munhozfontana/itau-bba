// interface that will be populated through api ${root}/api/v1/itau_teste

import { CepModel } from './cep_model';

export class CompanyModel {
  id!: number;
  name!: string;
  business!: string;
  valuation!: number;
  active!: boolean;
  cep!: CepModel;
  cnpj!: number;
}
