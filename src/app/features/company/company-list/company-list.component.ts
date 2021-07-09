import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CompanyModelView } from './../../../shared/models/company_model';
import { CompanyService } from './../../../shared/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.sass'],
})
export class CompanyListComponent implements OnInit {
  title: String = 'Polos Itaú';
  subTitle: String = 'confira abaixo alguns dos principais polos do itaú';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<CompanyModelView>;
  displayedColumns: string[] = [
    'name',
    'business',
    'valuation',
    'active',
    'acao',
  ];

  constructor(private companyService: CompanyService, private router: Router) {}

  // lifecycles from angular
  ngOnInit(): void {
    this.getCompany();
  }

  // methods
  private getCompany(): void {
    this.companyService
      .findAll()
      .pipe(first())
      .subscribe((res) => {
        this.populateList(res);
        this.configTable();
      });
  }

  private populateList(res: CompanyModelView[]) {
    this.dataSource = new MatTableDataSource<CompanyModelView>(res);
  }

  private configTable() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getStatus(status: boolean) {
    if (status) {
      return { active: true };
    } else {
      return { desactive: true };
    }
  }

  public navigateToDetail(id: String) {
    this.router.navigate([`company/detail/${id}`]);
  }

  public searchText(event: String) {
    this.dataSource.filter = event.trim().toLowerCase();
  }
}
