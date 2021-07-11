import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompanyModel } from '../../../models/company_model';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(
    private http: HttpClient,
    private dashboardService: DashboardService
  ) {}

  findAll(): Observable<CompanyModel[]> {
    return this.http.get<CompanyModel[]>(`${environment.itau}`);
  }

  findById(id: string): Observable<CompanyModel> {
    return this.http.get<CompanyModel>(`${environment.itau}/${id}`);
  }

  save(companyModel: CompanyModel) {
    this.dashboardService.saveByCompany(companyModel);
  }
}
