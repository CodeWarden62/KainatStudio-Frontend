import { Injectable } from '@angular/core';
import { IServiceModel, dummyServices } from './services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services:IServiceModel[] = [...dummyServices];
  constructor() { }

  getService(id:number){
    return this.services.find(s => s.Id === id);
  }
  addService(service:IServiceModel){
    service.Id = Math.random() + Date.now();
    this.services.push(service);
  }

  updateService(service:IServiceModel){
    const index = this.services.findIndex(s => s.Id === service.Id);
    this.services[index] = service;
  }

  deleteService(serviceId:number){
    this.services = this.services.filter(s => s.Id !== serviceId);
  }




}
