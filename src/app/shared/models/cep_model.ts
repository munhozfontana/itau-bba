import { CoordinateModel } from './cordinate_model';

export class CepModel {
  cep!: string;
  state!: string;
  city!: string;
  neighborhood!: string;
  street!: string;
  service!: string;
  location!: {
    type: string;
    coordinates: CoordinateModel;
  };
}
