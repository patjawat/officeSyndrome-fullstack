import { Component } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';


@Component({
  selector: 'app-spinner-loading',
  templateUrl: './spinner-loading.component.html',
  styleUrls: ['./spinner-loading.component.scss']
})
export class SpinnerLoadingComponent {

  constructor(
    public coreService: CoreService
  ) {}
}
