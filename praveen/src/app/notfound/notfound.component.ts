import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: ` <h2> Page Not Found....:( </h2>
  `,
  styleUrls: ['./notfound.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { 

  }
  
  ngOnInit() {
  }

}
