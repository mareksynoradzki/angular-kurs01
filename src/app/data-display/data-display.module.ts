import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, CustomPipe],
  exports: [MainComponent],
})
export class DataDisplayModule { }
