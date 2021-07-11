import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CompanyService } from 'src/app/shared/services/extermal/company/company.service';
import { CompanyModel } from './../../../shared/models/company_model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.sass'],
})
export class CompanyListComponent implements OnInit {
  // Variables
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

  // life cycles methods
  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.getCompany();
  }

  // Methods
  // Retrieve the data from web-service
  private getCompany(): void {
    this.companyService
      .findAll()
      .pipe(take(1))
      .subscribe((res) => {
        this.populateList(res);
        this.configTable();
      });
  }

  // Populate list at table, initially used in getCompany
  private populateList(res: CompanyModel[]) {
    this.dataSource = new MatTableDataSource<CompanyModel>(res);
  }

  // Config table at screen
  private configTable() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // From to status
  public getStatus(status: boolean) {
    if (status) {
      return { active: true };
    } else {
      return { deactivate: true };
    }
  }

  // Navigate to detail page from company
  public navigateToDetail(id: String) {
    this.router.navigate([`company/detail/${id}`]);
  }

  // Filter all elements at table
  public searchText(event: String) {
    this.dataSource.filter = event.trim().toLowerCase();
  }
}
