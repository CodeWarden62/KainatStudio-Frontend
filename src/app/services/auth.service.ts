import { Injectable } from '@angular/core';
import { WebapiService } from './webapi.service';
import { ApiConstants } from '../constants/api.constants';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorsService } from './errors.service';
import { StorageService } from './storage.service';
import { StorageConstants } from '../constants/storage.constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string='';
  constructor(
    private webapi: WebapiService,
    private errorsService: ErrorsService,
    private storage: StorageService,
    private router: Router
  ) {
    this.token = this.storage.get(StorageConstants.Token,'');
    const expiry:string = this.storage.get(StorageConstants.ExpiryTime,null);
    if(expiry && new Date(expiry) < new Date()){
      this.logout();
    }
  }
  logout(){
    this.token='';
    this.storage.removeStorageItem(StorageConstants.Token);
    this.storage.removeStorageItem(StorageConstants.ExpiryTime);
    this.storage.removeStorageItem(StorageConstants.Username);
  }

  login(userName:string, password:string){
    // call the api to login
    return this.webapi.post(ApiConstants.auth.basePath+ApiConstants.auth.operations.login, {userName, password}, true).
    pipe(
      catchError(err => {
        if(err.status === 400){
          throw this.errorsService.Errors.InvalidCredentials;
        }
        throw this.errorsService.Errors.GenericError;
      }),
      tap((res:any) => {
        this.storage.store(StorageConstants.Token, res.token);
        this.storage.store(StorageConstants.Username, res.user);
        this.storage.store(StorageConstants.ExpiryTime, res.expiry);
        this.router.navigate(['/admin']);
        return res;
      })
    )
  }
}
