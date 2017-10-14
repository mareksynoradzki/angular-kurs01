import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {TemplateComponent} from './template/template.component';
import {FormsModule as FM, ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component'

@NgModule({
    imports: [
        CommonModule,
        FM,
        ReactiveFormsModule
    ],
    declarations: [MainComponent, TemplateComponent, ReactiveComponent],
    exports: [MainComponent]
})
export class FormsModule {}
