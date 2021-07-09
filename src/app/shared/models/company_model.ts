// interface that will be populated through api ${root}/api/v1/itau_teste

export class CompanyModel {
  id!: number;
  name!: string;
  business!: string;
  valuation!: number;
  active!: boolean;
  cep!: string;
  cnpj!: number;
}

export class CompanyModelView extends CompanyModel {
  show: boolean = false;
}
