import { Injectable } from '@angular/core';
import { CompanyModel } from 'src/app/shared/models/company_model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // Fake data, in future there will be web-service
  private companyModelList: CompanyModel[] = [];

  constructor() {}

  findAllWhereHaveLocation(): CompanyModel[] {
    console.log(this.companyModelList);

    return this.companyModelList.filter(
      (filterItem) => filterItem.cep.cep != ''
    );
  }

  saveByCompany(companyModel: CompanyModel) {
    const index = this.companyModelList.findIndex(
      (item) => item.id === companyModel.id
    );

    if (index >= 0) {
      console.log('update');
      this.companyModelList[index] = companyModel;
    } else {
      console.log('save');
      this.companyModelList.push(companyModel);
    }
  }
}
