import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1.component';
import { tabsModule } from './tab1.routing.modules';



@NgModule({
  declarations: [Tab1Component],
  imports: [
    CommonModule,
    tabsModule
  ]
})
export class Tab1Module { }
