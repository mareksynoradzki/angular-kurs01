import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'fm-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

    fname: string = '';

    constructor() {}

    ngOnInit() {
    }

}
