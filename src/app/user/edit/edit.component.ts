import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'us-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    id: string;
    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
    }

    ngOnInit() {
    }

}
