import { Component, OnInit } from '@angular/core';
import { StuData }    from './StuData' ;


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new StuData(18, 'Praveen', this.powers[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  ngOnInit() {
  }

}
