import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@bc/guards/auth-guard.service';
import { BasketComponent } from '../lazy/components';
import { ContactComponent, ParentComponent, WishlistComponent } from './components';
const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'basket',
    component: BasketComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
