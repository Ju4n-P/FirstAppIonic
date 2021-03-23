import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from "./tabs.component";

const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            {
                path: 'tab1', loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1Module)
            },
            {
                path: 'tab2', loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2Module)
            },
            {
                path: 'tab3', loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3Module)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class tabsModule { }