import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { CompanyModelView } from './../models/company_model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<CompanyModelView[]> {
    return this.http.get<CompanyModelView[]>(`${environment.itau}`);
  }

  findById(id: number): Observable<CompanyModelView> {
    return this.http.get<CompanyModelView>(`${environment.itau}/${id}`);
  }
}
