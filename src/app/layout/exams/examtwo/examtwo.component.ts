import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {Exam} from '../exam';

@Component({
  selector: 'app-examtwo',
  templateUrl: './examtwo.component.html',
  styleUrls: ['./examtwo.component.scss'],
 animations: [routerTransition()]
})
export class ExamtwoComponent implements OnInit {
obj:any;
  constructor() { 
  this.obj=Exam;}

  ngOnInit() {
  }

}
