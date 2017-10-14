import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {USER_API_URI} from './tokens';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {


    private newDataSource: Subject<boolean> = new Subject();
    public newData: Observable<boolean> = this.newDataSource.asObservable();

    async add(user:User):Promise<User>{
        const config = {
          method:'POST',
          body: JSON.stringify(user),
          headers:{
           'Content-Type':'application/json'   
          }
        };
        const response = await fetch(this.uri, config);
        this.newDataSource.next(true);
        return await response.json() as User;
    }
    constructor(private client: Http, @Inject(USER_API_URI) private uri: string) {
        
    }
    
    getAll(): Observable<User[]> {
        return this.client.get(this.uri).map(response => response.json() as User[]);
    }

    getAllPromise(): Promise<User[]> {
        return fetch(this.uri)
            .then(response => response.json())
            .then(json => json as User[]);
    }

    async getAllPromise2(): Promise<User[]> {
        const response = await fetch(this.uri);
        return await response.json() as User[];
    }
}
