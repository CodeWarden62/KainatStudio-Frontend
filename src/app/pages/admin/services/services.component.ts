import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { IServiceModel } from './services.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatIcon, MatPaginator],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit{
  displayedColumns: string[] = ['thumbnail', 'name', 'priceRange', 'status', 'edit', 'delete'];
  services:IServiceModel[]=[
    {
      id:1,
      name:'Service 1',
      thumbnail:'https://via.placeholder.com/150',
      priceRange:'$10 - $20',
      status:'Active'
    },
    {
      id:2,
      name:'Service 2',
      thumbnail:'https://via.placeholder.com/150',
      priceRange:'$20 - $30',
      status:'Active'
    },
    {
      id:3,
      name:'Service 3',
      thumbnail:'https://via.placeholder.com/150',
      priceRange:'$30 - $40',
      status:'Active'
    },
    {
      id:4,
      name:'Service 4',
      thumbnail:'https://via.placeholder.com/150',
      priceRange:'$40 - $50',
      status:'Active'
    },
    {
      id:1,
      name:'Service 1',
      thumbnail:'https://via.placeholder.com/150',
      priceRange:'$10 - $20',
      status:'Active'
    },
    {
      id:2,
      name:'Service 2',
      thumbnail:'https://via.placeholder.com/150',
      priceRange:'$20 - $30',
      status:'Active'
    },
    {
      id:3,
      name:'Service 3',
      thumbnail:'https://via.placeholder.com/150',
      priceRange:'$30 - $40',
      status:'Active'
    },
    {
      id:4,
      name:'Service 4',
      thumbnail:'https://via.placeholder.com/150',
      priceRange:'$40 - $50',
      status:'Active'
    }
  ];

  dataSource = new MatTableDataSource<IServiceModel>(this.services);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
