import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

    private newValueSource: Subject<string> = new Subject();
    public newValueStream: Observable<string> = this.newValueSource.asObservable();
    
    newValue(value:string){
        this.newValueSource.next(value);
    }
    constructor() {}

}
