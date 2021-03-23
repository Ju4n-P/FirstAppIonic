import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { Tab2Component } from './tab2.component';
// import { Tab1Component } from "./tab1.component";

const routes: Routes = [
    { path: '', component: Tab2Component },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class tabsModule{ }