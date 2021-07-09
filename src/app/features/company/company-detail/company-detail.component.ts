import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/components/contents/loading/loading.service';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.sass'],
})
export class CompanyDetailComponent implements OnInit {
  title: String = 'Polo';
  subTitle: String = 'exibindo detalhes do polo';

  constructor(
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
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
      .pipe(first())
      .subscribe(({ business }) => {
        this.title = `${this.title} ${business}`;
        this.subTitle = `${this.subTitle} ${business}#${id}`;
      });
  }
}
