import { Component, OnInit } from '@angular/core';
import {colginfo} from '../college-info';
import { routerTransition } from '../../../router.animations';
import * as firebase from 'firebase';
@Component({
  selector: 'app-college-info',
  templateUrl: './college-info.component.html',
  styleUrls: ['./college-info.component.scss'],

  animations: [routerTransition()]
  })
export class CollegeInfoComponent implements OnInit {
collegesData:Array<any> = [];
// obj:any;
  constructor() {
  	// this.obj=colginfo;
   }
  ngOnInit() {
    var ref = firebase.database().ref('colleges/');
  ref.on('value', resp => {
  var mydata = snapshotToArray(resp);
  console.log(mydata);
  this.collegesData = mydata;
  });
  }

}
export const snapshotToArray = (snapshot) => {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;        
        returnArr.push(item);
    });
    return returnArr;
};