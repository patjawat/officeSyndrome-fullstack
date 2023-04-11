import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mat-header',
  templateUrl: './mat-header.component.html',
  styleUrls: ['./mat-header.component.scss']
})
export class MatHeaderComponent {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Output() selectedTheme?: string;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  
}
