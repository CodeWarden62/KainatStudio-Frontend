import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  static instance: StorageService;
  constructor() {
    StorageService.instance = this;
  }

  store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    localStorage.setItem(storageKey, encryptedValue);
  }

  get<T>(storageKey: string, defaultValue:any=null):T {
    try{
      const ret = localStorage.getItem(storageKey);
      return (ret != null ? JSON.parse(unescape(atob(ret))) : defaultValue) as T;
    }
    catch(e){
      return defaultValue as T;
    }
  }

  removeStorageItem(storageKey: string) {
    localStorage.removeItem(storageKey);
  }

  clear() {
    localStorage.clear();
  }
}
