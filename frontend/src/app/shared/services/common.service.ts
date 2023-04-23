import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  api = 'http://localhost:3000/api/common';

  constructor(
    private _http: HttpClient
  ) { }


  getAll(){
    return this._http.get(`${this.api}`);
  }
}
