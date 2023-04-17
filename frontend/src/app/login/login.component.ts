import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/auth/services/auth.service';

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
  
    constructor(private service: AuthService,private route:Router) {
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
        this.service.ProceedLogin(this.Login.value).subscribe(result => {
          if(result!=null){
            this.responsedata=result;
            localStorage.setItem('token',this.responsedata.accessToken)
            this.route.navigate([''])
          }
  
        });
      }
    }
    
}
