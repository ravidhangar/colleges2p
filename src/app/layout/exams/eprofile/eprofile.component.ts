import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-eprofile',
  templateUrl: './eprofile.component.html',
  styleUrls: ['./eprofile.component.scss'],
   animations: [routerTransition()]
})
export class EprofileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
