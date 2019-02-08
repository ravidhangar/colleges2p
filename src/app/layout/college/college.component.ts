import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';
import {Colg} from './college';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],

  animations: [routerTransition()]

})
export class CollegeComponent implements OnInit {

	obj:any;
  constructor() {
  	this.obj=Colg;
   }

  ngOnInit() {
  }

}
