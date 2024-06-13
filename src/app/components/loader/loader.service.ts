import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  showLoader() {
    this.isLoadingSubject.next(true);
  }

  hideLoader() {
    this.isLoadingSubject.next(false);
  }
}
