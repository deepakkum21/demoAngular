import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-angular';
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = 'Sample content';
}
