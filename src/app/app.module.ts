import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {MyCmpComponent} from './my-cmp/my-cmp.component';
import {DataDisplayModule} from './data-display/data-display.module';
import {DomManipulationModule} from './dom-manipulation/dom-manipulation.module';
import {ComunicationModule} from './comunication/comunication.module';
import {FormsModule} from './forms/forms.module';
import {UserModule} from './user/user.module';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
    declarations: [
        AppComponent,
        MyCmpComponent
    ],
    imports: [
        BrowserModule,
        DataDisplayModule,
        DomManipulationModule,
        ComunicationModule,
        FormsModule,
        UserModule,
        RouterModule.forRoot(routes)//dla głównego adresu
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'pl'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
