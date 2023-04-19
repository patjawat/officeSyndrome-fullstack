import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DummyService } from '../dummy.service';
import { CoreService } from 'src/app/core/services/core.service';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-form-dummy',
  templateUrl: './form-dummy.component.html',
  styleUrls: ['./form-dummy.component.scss']
})
export class FormDummyComponent {

  secondsLeft: number = 1000;
  dummyform:FormGroup
  constructor(
    private _dialogRef: MatDialogRef<FormDummyComponent>,
    private fb: FormBuilder,
    private _dummyService:DummyService,
    private _coreService:CoreService,
    public readonly swalTargets: SwalPortalTargets
  ) {
    this.dummyform = fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      phone:['',Validators.required],

    })
  }

  onFormSubmit(){
    if (this.dummyform.valid) {
    this._dummyService.create(this.dummyform.value).subscribe({
      next: (data:any) => {
       this._dialogRef.close();
       this._coreService.showSuccess();
       
        
      },error: (error:any) => {
        console.log(error);
        this._coreService.showWarning(error);
      }
    })
  }
  }

  showWarning(msg:string){
    this._coreService.showWarning(msg);
  }
}
