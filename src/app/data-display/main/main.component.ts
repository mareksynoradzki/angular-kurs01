import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'dd-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {

    stringData: string = 'krzysiek';
    numberData: number = 58.45;
    percentdata: number = .5;
    currencyData: number = 5878.44;
    dateData: Date = new Date();

    changeData() {
        this.stringData = "malinowski";
        this.numberData = Math.random() * 100;
        this.percentdata = Math.random();
        this.currencyData = Math.random() * 1000;
        this.dateData = new Date(1995, 11, 17);
    }
}
