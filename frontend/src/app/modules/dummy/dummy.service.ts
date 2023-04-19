import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  url = 'http://localhost:3000/api/dummy';
  constructor(
    private _http: HttpClient
  ) { }

  getAll(){
    return this._http.get(this.url);
  }

  create(data:any){
    return this._http.post(this.url,data)
  }
}
