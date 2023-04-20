import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMenu } from 'src/app/core/interface/IMenu';
import { HttpclientService } from 'src/app/core/services/HttpClientServices';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class MatlayoutComponent {


  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Output() selectedTheme?: string;

  menuList?: Observable<IMenu[]>;
  route:string = '';
  setting:boolean = false;
  constructor(
    private router: Router,
    private httpService: HttpclientService
    ) { }

    activeItem: string = '';

  setActiveItem(page: string) {
    this.activeItem = page;
    //console.log(this.activeItem);
  }

  ngOnInit() {

    this.menuList = this.httpService.getList<IMenu>("/assets/menu.json")
    this.route = this.router.url;
    console.log(this.router.url);
    if(this.router.url == '/settings'){
      this.setting = true;
    }else{
      this.setting = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logout');
    
  }


  
}
