import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/auth/services/auth.service';
import { CoreService } from '../core/services/core.service';

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

  email: string = '';
  password: string = '';
  remail: string = '';
  rpassword: string = '';
  rcpassword: string = '';

  constructor(
    private service: AuthService,
    private route: Router,
    private _coreService: CoreService
    ) {
    localStorage.clear();
  }
  Login = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }
  ProceedLogin() {
    if (this.Login.valid) {
      // this.service.ProceedLogin(this.Login.value).subscribe(result => {
      //   if(result!=null){
      //     this.responsedata=result;
      //     localStorage.setItem('token',this.responsedata.accessToken)
      //     this.route.navigate([''])
      //   }

      // });
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

  }

  login() {

  }
}
