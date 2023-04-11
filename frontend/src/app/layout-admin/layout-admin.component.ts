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
    
  ngOnInit() {


    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
         console.log(data)
        this.componentTitle = data.snapshot.data['title'];
      }

    });
     
  }

  clickEvent(){
    console.log('click');
    this.isOpen = !this.isOpen;
    
  }
}
