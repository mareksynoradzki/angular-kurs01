import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'cm-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

    @Input()
    childValue: string = '';
    
    @Output()
    newValue: EventEmitter<any> = new EventEmitter();

    setValue(value: string): void {
        this.childValue = value;
    }

    emitNewValue():void{
        this.newValue.emit(this.childValue);
        console.log('emituje');
    }
    
    constructor() {}

    ngOnInit() {
    }

}
