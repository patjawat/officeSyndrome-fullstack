import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable  } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { AuthService } from '../core/auth/services/auth.service';
import { CoreService } from '../core/services/core.service';
import { DummyService } from '../core/services/dummy.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


export interface Employee {
  id: number;
  name: string;
  jobtype: string;
  email: string;
  address: string;
  imageUrl: string;
}

export interface Obj {
   id: number;
   name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;

  formRegister:FormGroup

  // Autocomplace
  employeeCtrl = new FormControl();
  myControl = new FormControl();

  filteredOptions: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private route: Router,
    private _coreService: CoreService,
    
    ) {
    this.formRegister = fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required],
      department:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
    })

        //AutoComplate
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(val => {
                return this.filter(val || '')
           }) 
        )
  }
//AutoComplate แสดงสิ่งที่เลือก
  displayFn(user: any) {
    if (user) { return user.name; }
  }

  //AutoComplate filter ค้นหา
  filter(val: string): Observable<any> {
    return this.service.getData()
     .pipe(
       map(response => response.filter((option:any) => { 
         return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
       }))
     )
   } 


  Login = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {

  }


  submitEmp(){
    console.log(this.employeeCtrl.value);
    
  }

  ProceedLogin() {
    if (this.Login.valid) {

      this.service.ProceedLogin(this.Login.value).subscribe({
        next: (result) => {
          if (result != null) {
            this.responsedata = result;
            localStorage.setItem('token', this.responsedata.accessToken)
            this.route.navigate([''])
          }
        }, error: (error) => {
          console.log(error.error.message[0]);
          this._coreService.showWarning(error.error.message[0])
        }
      });
    }
  }

  register() {
    const data = this.formRegister.value;
    console.log(data);
    
  }

  login() {

  }
}
