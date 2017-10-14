import {Routes} from '@angular/router';
import {MyCmpComponent} from './my-cmp/my-cmp.component';

export const routes:Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: MyCmpComponent},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]