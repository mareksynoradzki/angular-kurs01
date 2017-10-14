import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'cm-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    parentValue: string = '';
    
    constructor(private dataService:DataService) {
        
    }

    setValue(value: string) {
        this.parentValue = value;
    }

    onChangeChildValue(value:string){
        console.log(value, 'ala ma kota');
    }
    ngOnInit() {
    }

}
