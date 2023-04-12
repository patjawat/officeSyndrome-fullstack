import { Component } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent {
  componentTitle: string = '';
  isOpen: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        this.componentTitle = data.snapshot.data['title'];
      }

    });
  }
    
  async ngOnInit() {
    
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
         console.log(data)
        this.componentTitle = data.snapshot.data['title'];
      }
    });

    // check เปิดปิด sidebar menu
    this.isOpen = (localStorage.getItem('isOpen')) == 'true' ? true : false;
   
    
  }

  clickEvent(){
    this.isOpen = !this.isOpen;
    localStorage.setItem('isOpen', String(this.isOpen));
  }
}
