import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [MatProgressBarModule,NgIf,AsyncPipe],
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.isLoading$.subscribe(isLoading => {
      // Optionally, perform additional actions based on loading state
    });
  }
}
