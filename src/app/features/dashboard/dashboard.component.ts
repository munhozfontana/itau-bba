import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CompanyModel } from 'src/app/shared/models/company_model';
import { CoordinateModel } from 'src/app/shared/models/cordinate_model';
import { DashboardService } from 'src/app/shared/services/apis/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  // Variables
  title: String = 'DashBoard';
  subTitle: String = 'detalhamento de dados';
  companyModelList: CompanyModel[] = [];

  moveMap!: CoordinateModel;

  constructor(
    private dashBoardService: DashboardService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const res = this.dashBoardService.findAllWhereHaveLocation();

    if (res.length == 0) {
      this._snackBar.open(`Nenhum dado encontrato`, undefined, {
        duration: 5 * 1000,
      } as MatSnackBarConfig);
    } else {
      this.companyModelList = res;
      this.moveMap = res.find(
        (item) => item.cep.location != null
      )?.cep.location.coordinates!;
    }
  }

  public onMapReady(event: any) {
    console.log('Map Ready');
  }
}
