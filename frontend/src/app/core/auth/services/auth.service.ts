import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  
  apiurl='http://127.0.0.1:3000/api/auth/signin';
  constructor(
    private http:HttpClient,
    private router: Router
    ) {

   }
   ProceedLogin(UserCred:any){
     return this.http.post(this.apiurl,UserCred);
   }
   IsLoggedIn(){
     return localStorage.getItem('token')!=null;
   }
   
   GetToken(){
    return localStorage.getItem('token')||'';
   }
   HaveAccess(){
     var loggintoken=localStorage.getItem('token')||'';
     var _extractedtoken=loggintoken.split('.')[1];
     var _atobdata=btoa(_extractedtoken);
     var _finaldata=JSON.parse(_atobdata);
     if(_finaldata.role=='admin'){
       return true
     }else{
      //  alert('you not having access');
       return false
     }
   }
   
}
