import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  url = 'https://jsonplaceholder.typicode.com/photos'
  constructor(
    private _http: HttpClient
  ) { }

  getAll(){
    return this._http.get(this.url);
  }
}
