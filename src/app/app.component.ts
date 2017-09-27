import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<header-selector></header-selector>
            <div class='container'>
            <app-student>Loading...</app-student>
              <router-outlet></router-outlet>
            </div>
            <footer-selector><footer-selector>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
