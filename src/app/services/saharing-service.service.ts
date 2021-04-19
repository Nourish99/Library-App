import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SahringServiceService {
  private sharinObject: any;
  constructor() { }

  get SharingValue(){
    return this.sharinObject;
  }

  set SharingValue(obj:any){
    this.sharinObject=obj;
  }
}
