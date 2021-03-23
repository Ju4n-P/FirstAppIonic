import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import { tabsModule } from './tabs.routing-module';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    tabsModule,
    CommonModule,
    IonicModule
  ]
})
export class TabsModule { }
