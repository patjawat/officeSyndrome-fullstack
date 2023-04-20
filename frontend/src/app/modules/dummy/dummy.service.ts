import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { CoreService } from 'src/app/core/services/core.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  url = 'http://localhost:3000/api/dummy';
  constructor(
    private _http: HttpClient,
    private _coreService: CoreService
  ) { }

  // reload Data หลังจาก submit ไปแล้ว
  private _refetchrequired = new Subject<void>();

  get Refetchrequired() {
    return this._refetchrequired;
  }


  getAll():Observable<any> {
    return this._http.get(this.url);
  }

  create(data: any) {
    return this._http.post(this.url, data).pipe(
      tap(() => {
        this._refetchrequired.next();
        this._coreService.showSuccess('บันทึกสำเร็จ');
      }),
    );
  }

  // update(id:number,data:any):Observable<any>  {
  update(id:number,data:any){
    console.log(id,data);
    
    // return data;
    return this._http.patch(`${this.url}/${id}`,data)
  }
  
   delete(item: any){
          return  this._http.delete(`${this.url}/${item.id}`).pipe(
            tap(() => {
              this._refetchrequired.next();
              this._coreService.showSuccess('ลบข้อมูลสำเร็จ')
            }),
          );
      }

}
