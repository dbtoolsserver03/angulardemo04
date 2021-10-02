import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public set(key:string,value:any) {
    localStorage.setItemkey(key,JSON.stringify(value));
  }
  public get(key:string){

    //return "this is a service";
    return JSON.parse(localStorage.getItem(key)|| '{}');
  }
  public remove(key:string){
    localStorage.removeItem(key);
  }
}
