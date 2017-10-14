import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {ListComponent} from './list/list.component';
import {UserService} from './user.service';
import {HttpModule} from '@angular/http';
import {USER_API_URI} from './tokens';
import {ReactiveFormsModule} from '@angular/forms';
import {AddComponent} from './add/add.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { EditComponent } from './edit/edit.component';
import {AuthGuard} from './auth.guard';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule, 
        RouterModule.forChild(routes)
    ],
    declarations: [MainComponent, ListComponent, AddComponent, EditComponent],
    exports: [RouterModule],
    providers: [
        UserService,
        AuthGuard, 
        {provide: USER_API_URI, useValue:'http://localhost:3000/user'}
    ]
})
export class UserModule {}
