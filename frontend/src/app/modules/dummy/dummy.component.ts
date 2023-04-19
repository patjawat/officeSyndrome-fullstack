import { Component } from '@angular/core';
import { DummyService } from './dummy.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormDummyComponent } from './form-dummy/form-dummy.component';
import { CoreService } from 'src/app/core/services/core.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent {

  
  constructor(

    private _dialog: MatDialog,
    private _dummyService: DummyService,
    private _toastrService:ToastrService,
    private _coreService:CoreService
    ){

  }



  openAddEditForm(){
    const dialogRef = this._dialog.open(FormDummyComponent,{
      width: '50%',
    })
  }

  deleteFile(id:number){
    console.log(id);
    
  }

  msgSucsess(){
    // this._coreService.showSuccess();
    // this._toastrService.success('Hello world!', 'Toastr fun!');
  }

  alertSuccess(){

  }
  

}
