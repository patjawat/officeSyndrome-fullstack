import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from 'src/app/core/interface/IMenu';
import { HttpclientService } from 'src/app/core/services/HttpClientServices';
 
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-matlayout',
  templateUrl: './matlayout.component.html',
  styleUrls: ['./matlayout.component.scss']
})
export class MatlayoutComponent {


  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Output() selectedTheme?: string;

  menuList?: Observable<IMenu[]>;
  constructor(private httpService: HttpclientService) { }

  ngOnInit() {
    this.menuList = this.httpService.getList<IMenu>("/assets/menu.json")
  }

  
}
