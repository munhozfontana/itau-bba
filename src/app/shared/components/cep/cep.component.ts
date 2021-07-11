import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepModel } from '../../models/cep_model';
import { CepService } from '../../services/apis/cep/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.sass'],
})
export class CepComponent implements OnInit {
  @Output()
  formGroupCep: EventEmitter<CepModel> = new EventEmitter<CepModel>();
  form!: FormGroup;
  toSend: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService
  ) {}

  ngOnInit(): void {
    this.formConfig();
    this.obsCep();
  }

  private formConfig() {
    this.form = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.maxLength(9)]],
      street: [''],
      neighborhood: [''],
      state: [''],
      city: [''],
    });
  }

  private obsCep() {
    this.form.get('cep')?.valueChanges.subscribe((cangedCep: string) => {
      if (cangedCep.length == 8 && this.toSend) {
        this.toSend = false;
        this.cepService.findByCep(cangedCep).subscribe((cepRes) => {
          this.form.patchValue(cepRes);
          this.formGroupCep.emit(cepRes);
        });
      } else if (cangedCep.length < 8) {
        this.toSend = true;
      }
    });
  }
}
