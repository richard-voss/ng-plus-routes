import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  greet: string;

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(p => this.greet = p.greet);
  }
}
