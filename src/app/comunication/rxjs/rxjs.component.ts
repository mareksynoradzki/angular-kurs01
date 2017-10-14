import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Component({
    selector: 'cm-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

    valueList: string[] = [];
    subscription: Subscription;
    stream:Observable<string>;

    watch(value: boolean) {
        if (value) {
            this.subscription = this.stream
            .subscribe(value => this.valueList.push(value));
        }else{
            if (this.subscription){
                this.subscription.unsubscribe();
            }
        }
    }
    
    transform(value:boolean){
        this.watch(false);
        if(value){
            this.stream = this.stream.map(value => value.toUpperCase());
        }else{
            this.stream = this.ds.newValueStream;
        }
        this.watch(true);
    }

    constructor(private ds: DataService) {
        this.stream = ds.newValueStream;
    }

    ngOnInit() {
    }

}
