import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from '@bc/modules/core/components/parent/parent.component';
import { LoginComponent } from './modules/lazy/components';
const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'filter/:filter',
    loadChildren: () => import('@bc/modules/core/master.module').then(m => m.MasterModule),
  },
  {
    path: 'lazy',
    loadChildren: () => import('@bc/modules/lazy/lazy').then(n => n.LazyModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
