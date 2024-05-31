import { Injectable } from '@angular/core';
import { IServiceModel, dummyServices } from './services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services:IServiceModel[] = [...dummyServices];
  constructor() { }

  getService(id:number){
    return this.services.find(s => s.id === id);
  }
  addService(service:IServiceModel){
    service.id = Math.random() + Date.now();
    this.services.push(service);
  }

  updateService(service:IServiceModel){
    const index = this.services.findIndex(s => s.id === service.id);
    this.services[index] = service;
  }

  deleteService(serviceId:number){
    this.services = this.services.filter(s => s.id !== serviceId);
  }




}
