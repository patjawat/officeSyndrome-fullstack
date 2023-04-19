import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsComponent } from './forms/forms.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  constructor(
    private _dialog: MatDialog,
    ){

  }

  openAddEditEmpForm(){
    const dialogRef = this._dialog.open(FormsComponent)
    dialogRef.afterClosed().subscribe({
      next:(val:any) => {
        if(val){
          // this._coreService.openSnackBar('ok','success');
          // this.empList();
        }
      },
    })
  }

}
