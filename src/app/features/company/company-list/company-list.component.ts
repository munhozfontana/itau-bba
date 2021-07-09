import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { finalize, first } from 'rxjs/operators';
import { LoadingService } from './../../../shared/components/contents/loading/loading.service';
import { CompanyModel } from './../../../shared/models/company_model';
import { CompanyService } from './../../../shared/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.sass'],
})
export class CompanyListComponent implements OnInit, AfterViewInit {
  title: String = 'Polos Itaú';
  subTitle: String = 'confira abaixo alguns dos principais polos do itaú';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<CompanyModel>;
  displayedColumns: string[] = [
    'name',
    'business',
    'valuation',
    'active',
    'acao',
  ];

  constructor(
    private companyService: CompanyService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  // lifecycles from angular
  ngOnInit(): void {
    this.getCompany();
  }

  ngAfterViewInit() {}

  // methods
  private getCompany(): void {
    this.loadingService.onLoading();
    this.companyService
      .findAll()
      .pipe(first())
      .pipe(finalize(this.loadingService.offLoading))
      .subscribe((res) => {
        this.populateList(res);
        this.configTable();
      });
  }

  private populateList(res: CompanyModel[]) {
    this.dataSource = new MatTableDataSource<CompanyModel>(res);
  }

  private configTable() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getStatus(status: boolean) {
    if (status) {
      return {
        'font-size': '19px',
        color: '#72f87b',
      };
    } else {
      return {
        'font-size': '19px',
        color: '#ff7573',
      };
    }
  }

  public navigateToDetail(id: String) {
    this.router.navigate([`detail/${id}`]);
  }
}
