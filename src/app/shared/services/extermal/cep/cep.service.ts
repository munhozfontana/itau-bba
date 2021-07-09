import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepModel } from 'src/app/shared/models/cep_model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  findByCep(cep: string): Observable<CepModel> {
    return this.http.get<CepModel>(`${environment.cep}/${cep}`, httpOptions);
  }
}
