import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../constants/app.constants';
import { ApiConstants, ControllerNames } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(
    private http: HttpClient
  ) { }

  get(controllerName:ControllerNames){
    let url = environment.apiUrl + ApiConstants.controllers[controllerName].basePath;
    return this.http.get(url);
  }
  getById(controllerName:ControllerNames,id:number){
    let url = environment.apiUrl + ApiConstants.controllers[controllerName].basePath + ApiConstants.operations.id + '/' + id;
    return this.http.get(url);
  }
  create(controllerName:ControllerNames,data:any){
    let url = environment.apiUrl + ApiConstants.controllers[controllerName].basePath + ApiConstants.operations.create;
    return this.http.post(url,data);
  }
  update(controllerName:ControllerNames,data:any){
    let url = environment.apiUrl + ApiConstants.controllers[controllerName].basePath + ApiConstants.operations.update;
    return this.http.put(url,data);
  }
  delete(controllerName:ControllerNames,id:number){
    let url = environment.apiUrl + ApiConstants.controllers[controllerName].basePath + ApiConstants.operations.delete + '/' + id;
    return this.http.delete(url);
  }
  customGet(controllerName:ControllerNames,customEndpoint:string){
    let url = environment.apiUrl + ApiConstants.controllers[controllerName].basePath + ApiConstants.controllers[controllerName]+customEndpoint;
    return this.http.get(url);
  }
  customPost(controllerName:ControllerNames,customEndpoint:string,data:any){
    let url = environment.apiUrl + ApiConstants.controllers[controllerName].basePath + ApiConstants.controllers[controllerName]+customEndpoint;
    return this.http.post(url,data);
  }
  customPut(controllerName:ControllerNames,customEndpoint:string,data:any){
    let url = environment.apiUrl + ApiConstants.controllers[controllerName].basePath + ApiConstants.controllers[controllerName]+customEndpoint;
    return this.http.put(url,data);
  }
}
