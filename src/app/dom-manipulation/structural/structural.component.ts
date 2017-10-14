import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'dom-structural',
    templateUrl: './structural.component.html',
    styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

    visible: boolean = true;
    page: number = 1;
    itemList: string[] = ['a', 'b', 'c', 'd'];

    changeVisible() {
        this.visible = !this.visible;
    }

    nextPage() {
        this.page++;
    }
    
    addItem(item: string) {
        this.itemList.push(item);
    }

    constructor() {}

    ngOnInit() {
    }

}
