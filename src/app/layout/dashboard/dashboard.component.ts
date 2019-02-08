import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/col1.gif',
                label: 'College Search',
                text:
                    'Get Your Dream College!'
            },
            {
                imagePath: 'assets/images/col2.jpg',
                label: 'Career Counselling',
                text: 'Choose your right path !'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: 'This is Alert message'
            },
            {
                id: 2,
                type: 'warning',
                message: 'This is Alert message'
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
