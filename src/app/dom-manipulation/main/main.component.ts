import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'dom-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    page: string = 'properties';

    setPage(value: string) {
        console.log('zmiana na', value);
        this.page = value;
    }
    constructor() {}

    ngOnInit() {
    }

}
