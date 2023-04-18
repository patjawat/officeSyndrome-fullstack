import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  durationInSeconds = 5;
  private loading: boolean = false;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(msg:string,action:string) {
    this._snackBar.open(msg, action,{
      duration: this.durationInSeconds * 500,
      verticalPosition:'top'
    });
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }

  
}
