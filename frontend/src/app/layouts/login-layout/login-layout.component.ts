import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

  name = 'Get Current Url Route Demo';
  currentRoute: string = '';

  constructor(private router: Router) {
    console.log(router.url);


  }
  ngOnInit(): void {
    console.log(this.router.url);
    console.log('theme')
  }


}

