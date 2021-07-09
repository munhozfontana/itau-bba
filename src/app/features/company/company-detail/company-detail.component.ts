import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CompanyService } from 'src/app/shared/services/extermal/company/company.service';
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.sass'],
})
export class CompanyDetailComponent implements OnInit {
  title: String = 'Polo';
  subTitle: String = 'exibindo detalhes do polo';
  form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formConfig();
    this.getCompanyById();
  }

  private getCompanyById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.populate(id);
    }
  }

  private populate(id: string) {
    this.populateTitle(id);
  }

  private populateTitle(id: string) {
    this.companyService
      .findById(id)
      .pipe(take(1))
      .subscribe(({ business }) => {
        this.title = `${this.title} ${business}`;
        this.subTitle = `${this.subTitle} ${business}#${id}`;
      });
  }

  private formConfig() {
    this.form = this.fb.group({
      company: this.fb.group({
        name: ['', Validators.required],
        business: ['', Validators.required],
        valuation: ['', Validators.required],
        active: ['', Validators.required],
        cnpj: ['', Validators.required],
      }),
      cep: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
    });
  }

  formCep(cep: any) {
    console.log(cep);
  }
}
