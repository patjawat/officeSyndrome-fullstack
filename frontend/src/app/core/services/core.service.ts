import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  durationInSeconds = 5;
  private loading: boolean = false;

  constructor(
    private _toastr: ToastrService,
    private _snackBar: MatSnackBar) {}

  openSnackBar(msg:string,action:string) {
    this._snackBar.open(msg, action,{
      duration: this.durationInSeconds * 500,
      verticalPosition:'top'
    });
  }


// set การโหลด http fecth data
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }
  


  // toastr show massage
  alertSuccess(msg:string) {

  }

  showSuccess(msg:string) {
    this._toastr.success(msg, 'Success!');
  }

  showWarning(msg:string) {
    this._toastr.warning(msg, 'แจ้งเตือน')
  }

  showErrorMessage(msg:string) {
    this._toastr.error(msg,'errpr');
  }



  
}
