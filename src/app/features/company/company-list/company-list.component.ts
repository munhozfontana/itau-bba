import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.sass'],
})
export class CompanyListComponent implements OnInit {
  title: String = 'Polos Itaú';
  subTitle: String = 'confira abaixo alguns dos principais polos do itaú';

  constructor() {}

  ngOnInit(): void {}
}
