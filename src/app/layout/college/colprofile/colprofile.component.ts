import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-colprofile',
  templateUrl: './colprofile.component.html',
  styleUrls: ['./colprofile.component.scss'],
  animations: [routerTransition()]

})
export class ColprofileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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