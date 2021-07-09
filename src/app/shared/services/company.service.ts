import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { CompanyModel } from './../models/company_model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<CompanyModel[]> {
    return this.http.get<CompanyModel[]>(`${environment.itau}`);
  }

  findById(id: number): Observable<CompanyModel> {
    return this.http.get<CompanyModel>(`${environment.itau}/${id}`);
  }
}
