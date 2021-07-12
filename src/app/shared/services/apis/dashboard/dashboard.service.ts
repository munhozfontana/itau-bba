import { Injectable } from '@angular/core';
import { CompanyModel } from 'src/app/shared/models/company_model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // Fake data, in future there will be web-service

  constructor() {}

  findAllWhereHaveLocation(): CompanyModel[] {
    return this.getLocationLocalStorage().filter(
      (filterItem) => filterItem.cep.cep != ''
    );
  }

  saveByCompany(companyModel: CompanyModel) {
    const dataFromLocalStorage = this.getLocationLocalStorage();
    const index = dataFromLocalStorage.findIndex(
      (item) => item.id === companyModel.id
    );

    if (index >= 0) {
      dataFromLocalStorage[index] = companyModel;
    } else {
      dataFromLocalStorage.push(companyModel);
    }
    this.setLocationLocalStorage(dataFromLocalStorage);
  }

  private getLocationLocalStorage(): CompanyModel[] {
    const res = localStorage.getItem('locations');
    if (res) {
      return JSON.parse(res);
    }
    return [];
  }

  private setLocationLocalStorage(companyModel: CompanyModel[]): void {
    localStorage.setItem('locations', JSON.stringify(companyModel));
  }
}
