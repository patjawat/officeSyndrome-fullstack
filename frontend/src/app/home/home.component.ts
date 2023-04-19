import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DummyService } from '../core/services/dummy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class HomeComponent {




  title = 'my-app';
  state = 'collapsed';

  constructor(
    private dummyservice: DummyService
  ) { }

  photo: [] = [];

  ngOnInit(): void {
    console.log('Loafing');
    this.loadPhoto();

  }

  loadPhoto() {
    this.dummyservice.getAll().subscribe((res: any) => {
      this.photo = res;
      console.log(res);
      
    })
    // this.dummyservice.getAll().subscribe({
    //   next: (patient:any) => {
    //    this.photo = patient.items;
    //    console.log(patient.items);

    //   },error(err) {
    //     console.log(err);

    //   },
    // });
  }

  toggle(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

}
