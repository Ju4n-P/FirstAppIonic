import { TabsModule } from "./tabs.module";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path: '', component: TabsModule,
    children : [
        {
            path: 'tab-one',
            loadChildren: () => import('./tab1/tab1.component').then(m => m.Tab1Component)
        },
        {
            path: 'tab-two',
            loadChildren: () => import('./tab1/tab2.component').then(m => m.Tab2Component)
        },
        {
            path: 'tab-three',
            loadChildren: () => import('./tab1/tab3.component').then(m => m.Tab3Component)
        },
    ]},

    {
        path: '**',
        redirectTo: 'tabs',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class tabsModule { }