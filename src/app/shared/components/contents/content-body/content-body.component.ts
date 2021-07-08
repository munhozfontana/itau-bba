import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.sass'],
})
export class ContentBodyComponent implements OnInit {
  @Input() title: String = 'Titulo';
  @Input() subTitle: String = 'sub titulo';

  constructor() {}

  ngOnInit(): void {}
}
