import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
    selector: 'us-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    users: User[];

    constructor(private us: UserService, private router: Router) {
        this.refresh();
        this.subscribe();
    }

    edit(id:string) {
        this.router.navigate(['user/edit', id]);
    }

    subscribe() {
        this.us.newData.subscribe(() => this.refresh());
    }

    async refresh() {
        //        this.us.getAll().subscribe(users => this.users = users);
        this.users = await this.us.getAllPromise2();
    }


    ngOnInit() {
    }

}
