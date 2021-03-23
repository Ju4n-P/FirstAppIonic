import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { Tab3Component } from './tab3.component';
// import { Tab1Component } from "./tab1.component";

const routes: Routes = [
    { path: '', component: Tab3Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class tabsModule { }