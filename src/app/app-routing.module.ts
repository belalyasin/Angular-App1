import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: AppComponent
  },
  {
    path:'test',
    component:TestComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
