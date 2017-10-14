import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PropertiesComponent } from './properties/properties.component';
import { StructuralComponent } from './structural/structural.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, PropertiesComponent, StructuralComponent],
  exports: [MainComponent]
})
export class DomManipulationModule { }
