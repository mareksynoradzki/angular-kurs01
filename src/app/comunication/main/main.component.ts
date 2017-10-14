import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'cm-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private ds: DataService) {}

    newValue(value: string) {
        this.ds.newValue(value);
    }

    ngOnInit() {
    }

}
