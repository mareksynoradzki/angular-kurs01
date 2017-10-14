import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {DataService} from './data.service';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, ParentComponent, ChildComponent, RxjsComponent],
  exports: [MainComponent],
  providers:[DataService]
})
export class ComunicationModule { }
