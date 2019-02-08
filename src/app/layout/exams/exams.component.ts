import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
    animations: [routerTransition()]
})
export class ExamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
