import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  api = 'http://localhost:3000/api/common';

  constructor(
    private _http: HttpClient
  ) { }


  getAll():Observable<any>{
    return this._http.get(`${this.api}`);
  }


  getAllDepartment():Observable<any>{
    return this._http.get(`${this.api}/department`);
  }


  // this._http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(tap(data => this.opts = data))
  // opts = [];
  // getAllDepartment() {
  //   return this.opts.length ?
  //     of(this.opts) :
  //     this._http.get<any>(`${this.api}/department`).pipe(
  //       tap((data) => {
  //         this.opts = data[0].categorys
  //         // console.log(data[0].categorys);
          
  //         // this.opts = data[0].categorys
  //       })
  //       )
  //       console.log(opts);
        
  // }
}
