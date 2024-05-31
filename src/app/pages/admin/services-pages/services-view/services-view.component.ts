import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { IServiceModel, dummyServices } from '../services.model';
import { RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services-view',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIcon,
    MatPaginator,
    RouterModule,
    MatButton,
  ],
  templateUrl: './services-view.component.html',
  styleUrl: './services-view.component.scss',
})
export class ServicesViewComponent implements AfterViewInit {
  dataSource: MatTableDataSource<IServiceModel>;
  displayedColumns: string[] = [
    'thumbnail',
    'name',
    'priceRange',
    'status',
    'edit',
    'delete',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private servicesService: ServicesService,
  ){
    this.dataSource = new MatTableDataSource(this.servicesService.services);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.servicesService.services);
  }
  handleDelete(serviceId:number){
    this.servicesService.deleteService(serviceId);
    this.dataSource = new MatTableDataSource(this.servicesService.services);
  }
}
