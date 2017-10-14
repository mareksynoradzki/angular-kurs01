import {Routes} from '@angular/router'
import {MainComponent} from './main/main.component';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {AuthGuard} from './auth.guard';

export const routes:Routes = [
    {path: 'user', component:MainComponent, 
        children:[
            {path: '', redirectTo: 'list', pathMatch:'full'},
            {path: 'list', component:ListComponent},
            {path: 'add', component: AddComponent, canActivate:[AuthGuard]},
            {path: 'edit/:id', component:EditComponent}
        ]
    }
]