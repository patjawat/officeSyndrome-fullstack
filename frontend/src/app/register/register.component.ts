import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, map, of, startWith, switchMap, tap } from 'rxjs';
import { AuthService } from '../core/auth/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../shared/services/common.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  filteredOptions: Observable<any[]>;
  myControl = new FormControl();
  formRegister: FormGroup;
  common: string[] = [];
  // options = [];


  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private http: HttpClient,
    private commonService: CommonService
    // private servicex: Servicex
  ) {
    this.formRegister = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    })
    this.filteredOptions = this.formRegister.valueChanges.pipe(
      startWith(''),
      debounceTime(100),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val.department || '')
      })
    )

  }

  OnInit(): void {
    this.loadCommon();
  }
  //AutoComplate แสดงสิ่งที่เลือก
  displayFn(user: any) {
    if (user) { return user.name; }
  }

  //AutoComplate filter ค้นหา

  filter(val: string): Observable<any[]> {
    return this.service.getData()
      .pipe(
        map(response => response.filter((option: any) => {
          return option["name"].toLowerCase().indexOf(val) === 0
        }))
      )
  }

  register() {
    const data = this.formRegister.value;
    console.log(data);

  }

  loadCommon() {
    this.commonService.getAll().subscribe({
      next: (res: any) =>{ 
        this.common = res;
        console.log('loadCommno');
        
      }, error: (err) => {
        console.log(err
        );

      }
    });
  }


}
