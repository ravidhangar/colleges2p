import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {Exam} from '../exam';

@Component({
  selector: 'app-examone',
  templateUrl: './examone.component.html',
  styleUrls: ['./examone.component.scss'],
 animations: [routerTransition()]
})
export class ExamoneComponent implements OnInit {

	obj :any;
  constructor() {
  this.obj=Exam; }

  ngOnInit() {
  }

}
