import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../constants/app.constants';import { Observable, catchError, tap } from 'rxjs';
import { LoaderService } from '../components/loader/loader.service';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { StorageConstants } from '../constants/storage.constants';
;

@Injectable({
  providedIn: 'root',
})
export class WebapiService {

  constructor(
    private http: HttpClient,
    private loader: LoaderService,
    private storage:StorageService
  ) { }

  getHeaders(){
    const token= this.storage.get(StorageConstants.Token,'');
    const headers= new HttpHeaders({
      'Content-Type': 'application/json',
      "authorization": "Bearer "+token
    });
    return headers;
  }

  withLoaderHandling(withLoader:boolean,apiCall:Observable<any>){
    if(!withLoader){
      return apiCall;
    }
    this.loader.showLoader();
    return apiCall.pipe(
      tap(() => this.loader.hideLoader()),
      catchError(err => {
        this.loader.hideLoader();
        throw err;
      })
    )
  }

  get(path:string, withLoader=false){
    let url = environment.apiUrl +path;
    return this.withLoaderHandling(withLoader,this.http.get(url, {headers:this.getHeaders()}));
  }
  post(path:string, data:any, withLoader:boolean=false){
    let url = environment.apiUrl + path;
    return this.withLoaderHandling(withLoader,this.http.post(url,data,{headers:this.getHeaders()} ))
  }
  update(path:string,data:any,withLoader:boolean=false){
    let url = environment.apiUrl +path;
    return this.withLoaderHandling(withLoader, this.http.put(url,data,{headers:this.getHeaders()}));
  }
  delete(path:string,id:number,withLoader:boolean=false){
    let url = environment.apiUrl +path;
    return this.withLoaderHandling(withLoader,this.http.delete(url,{headers:this.getHeaders()}));
  }
}
