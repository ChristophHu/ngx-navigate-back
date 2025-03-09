import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxNavigateBackService } from '../../../ngx-navigate-back/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'demo';

  _navigateBackService: NgxNavigateBackService = inject(NgxNavigateBackService)

  back() {
    this._navigateBackService.navigateBack()
  }
}
