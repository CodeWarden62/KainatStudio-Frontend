import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { IServiceModel, ServicePropNames, dummyServices } from '../services.model';
import { RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ServicesService } from '../services.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { TypeSafeMatCellDef } from '../../../../directives/type-safe-mate-cell-def.directive';

enum EServiceTableColumns {
  Name = ServicePropNames.Name,
  Description = ServicePropNames.Description,
  PriceRange = 'PriceRange',
  SortOrder = ServicePropNames.SortOrder,
  ActiveFlag = ServicePropNames.ActiveFlag,
  Edit = 'Edit',
  Delete = 'Delete',
}
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
    MatSlideToggle,
    TypeSafeMatCellDef
  ],
  templateUrl: './services-view.component.html',
  styleUrl: './services-view.component.scss',
})
export class ServicesViewComponent implements AfterViewInit,OnInit {
  dataSource: MatTableDataSource<IServiceModel>;
  displayedColumns: string[] =[
    EServiceTableColumns.Name,
    EServiceTableColumns.Description,
    EServiceTableColumns.PriceRange,
    EServiceTableColumns.SortOrder,
    EServiceTableColumns.ActiveFlag,
    EServiceTableColumns.Edit,
    EServiceTableColumns.Delete,
  ]
  ServiceTableColumns=EServiceTableColumns;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ServicePropNames = ServicePropNames;
  constructor(
    private servicesService: ServicesService,
  ){
    this.dataSource = new MatTableDataSource(this.servicesService.services);
  }
  ngOnInit(): void {
    this.servicesService.getServices().subscribe(res=>{
      this.dataSource = new MatTableDataSource(this.servicesService.services);
    });
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
