import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/services/auth.service';
import { CoreService } from '../core/services/core.service';

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

  responsedata: any;
  formLogin: FormGroup
  active:boolean=false;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private route: Router,
    private _coreService: CoreService,

  ) {

    this.formLogin = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  
  ngOnInit(): void {

  }

  ProceedLogin() {
    // console.log(this.formLogin.value);
    
    if (this.formLogin.valid) {
      this.service.ProceedLogin(this.formLogin.value).subscribe({
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

}
