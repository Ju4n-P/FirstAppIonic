import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Page1Component } from './component/page1/page1.component';
// import { Page2Component } from './component/page2/page2.component';
// import { Page3Component } from './component/page3/page3.component';
// import { Page4Component } from './component/page4/page4.component';
// import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  // {path: 'header ', component: HeaderComponent},
  // {path: 'page1', component: Page1Component},
  // {path: 'page2', component: Page2Component},
  // {path: 'page3', component: Page3Component},
  // {path: 'page4', component: Page4Component},

  {path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)},

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

export class AppRoutingModule { }
