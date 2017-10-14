import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'dom-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

    disabled: boolean = false;
    size: number = 10;
    color: string = '#f00';

    changeDisabled() {
        this.disabled = !this.disabled;
    }
    incSize(): void {
        this.size++;
    }
    setColor(color: string) {
        this.color = color;
    }

    constructor() {}

    ngOnInit() {
    }

}
