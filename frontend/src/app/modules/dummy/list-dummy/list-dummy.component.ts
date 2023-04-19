import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';
import { CoreService } from 'src/app/core/services/core.service';
import { FormDummyComponent } from '../form-dummy/form-dummy.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-dummy',
  templateUrl: './list-dummy.component.html',
  styleUrls: ['./list-dummy.component.scss']
})
export class ListDummyComponent {

  constructor(
    private _dialog: MatDialog,
    private _dummyService:DummyService,
    private _coreService:CoreService
  ) {

  }


  dummy = new Array<any>();

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._dummyService.getAll().subscribe({
      next:(data:any) => {
        this.dummy = data;
        console.log();
        
      },
      error:(err:any) => {
        this._coreService.showErrorMessage(JSON.stringify(err))
      }
    })
  }

  openEditForm(){
    this._dialog.open(FormDummyComponent,{
      width: '50%',
    })
  }

}
