// interface that will be populated through api ${root}/api/v1/itau_teste

interface IBusiness {
  id: number;
  name: string;
  business: string;
  valuation: number;
  active: boolean;
  cep: string;
  cnpj: number;
}
