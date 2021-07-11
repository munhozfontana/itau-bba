import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CepModel } from 'src/app/shared/models/cep_model';
import { CompanyModel } from 'src/app/shared/models/company_model';
import { CompanyService } from 'src/app/shared/services/apis/company/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.sass'],
})
export class CompanyDetailComponent implements OnInit {
  // Variables
  title: String = 'Polo';
  subTitle: String = 'exibindo detalhes do polo';
  form!: FormGroup;

  // Life cycle methods
  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder,
    private location: Location,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.formConfig();
    this.getCompanyById();
  }

  // Recover parameter from URL and populate elements
  private getCompanyById() {
    const id = this.getParameterId();
    if (id) {
      this.populate(id);
    }
  }

  private getParameterId() {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  // Recover data from web-service by id parameterized
  private populate(id: string) {
    this.companyService
      .findById(id)
      .pipe(take(1))
      .subscribe((res) => {
        this.title = `${this.title} ${res.business}`;
        this.subTitle = `${this.subTitle} ${res.business}#${id}`;
        this.form.patchValue(res);
      });
  }

  // Initial form setup
  private formConfig() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
      valuation: ['', Validators.required],
      active: ['', Validators.required],
      cnpj: ['', Validators.required],
      cep: this.fb.group({
        state: [''],
        city: [''],
        neighborhood: [''],
        street: [''],
        service: [''],
        location: this.fb.group({
          type: [''],
          coordinates: this.fb.group({
            longitude: [''],
            latitude: [''],
          }),
        }),
      }),
    });
  }

  // Populate cep
  formCep(cep: CepModel) {
    this.form.get('cep')?.patchValue(cep);
  }

  // Back navigation
  cancel() {
    this.location.back();
  }

  // Save elements in fake web-service
  save() {
    this.location.back();
    this.companyService.save({ ...this.form.value, id: this.getParameterId() });
    this._snackBar.open(
      `Polo ${(this.form.value as CompanyModel).name} salvo com sucesso`,
      undefined,
      { duration: 4000 }
    );
  }
}
