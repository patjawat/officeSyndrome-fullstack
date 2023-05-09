import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, debounceTime, delay, distinctUntilChanged, map, of, startWith, switchMap, take, takeUntil, tap } from 'rxjs';
import { AuthService } from '../core/auth/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService,Person } from '../core/services/data.service';
import { matchValidator } from './form-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  formRegister: FormGroup;
  department:any = [];
 

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {

    this.formRegister = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      department: ['', Validators.required],
       confirm_password: ['', [
        Validators.required,
        matchValidator('password')
      ]],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    })
  }

  ngOnInit(): void {
    this.department = this.dataService.getCategory('department');
  }

  register() {
    const data = this.formRegister.value;
    console.log(data);

  }

}
