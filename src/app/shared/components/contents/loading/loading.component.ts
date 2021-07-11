import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
})
export class LoadingComponent implements OnInit {
  // Variables
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  isLoading = false;

  //Lifecycle Methods
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    // Listen each changed from loadingService, when true show loading at screen
    this.loadingService.getLoading().subscribe((res) => (this.isLoading = res));
  }
}
