import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Label } from 'ng2-charts';
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
  single!: any[];

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];

  public activeChartLabels: Label[] = ['Activated', 'deactivated'];
  public activeChartData: number[] = [];

  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
      ],
    },
  ];

  moveMap: CoordinateModel = {
    latitude: '-15.77972',
    longitude: '-47.92972',
  } as CoordinateModel;

  marks: CoordinateModel[] = [];

  constructor(
    private dashBoardService: DashboardService,
    private _snackBar: MatSnackBar
  ) {
    Object.assign(this, this.single);
  }

  ngOnInit(): void {
    const res = this.dashBoardService.findAllWhereHaveLocation();
    if (res.length == 0) {
      this._snackBar.open(`Nenhum dado encontrato`, undefined, {
        duration: 5 * 1000,
      } as MatSnackBarConfig);
    } else {
      this.populateMap(res);
      this.populateGraph(res);
    }
  }

  private populateGraph(res: CompanyModel[]) {
    this.pieChartLabels = res.map((item) => item.business);
    this.pieChartData = res.map((item) => item.valuation);
    this.activeChartData.push(res.filter((item) => item.active).length);
    this.activeChartData.push(res.filter((item) => !item.active).length);
  }

  private populateMap(res: CompanyModel[]) {
    this.companyModelList = res;
    this.marks = res
      .filter((item) => item.cep.location != null)
      .map((item) => item.cep.location.coordinates);
  }

  public onMapReady(event: any) {
    console.log('Map Ready');
  }
}
