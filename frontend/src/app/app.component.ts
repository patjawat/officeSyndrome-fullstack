import { Component } from '@angular/core';
import * as AOS from "aos";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HRMS';

  ngOnInit(): void {
    AOS.init({
      duration: 750,
      delay: 150,
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
