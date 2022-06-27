import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from '@bc/modules/lazy/components/basket/basket.component';
import { LoginComponent } from '@bc/modules/lazy/components/login/login.component';
import { ProductComponent } from '@bc/modules/lazy/components/product/product.component';
import { AuthGuardLoginedUserService } from '@bc/guards/auth-guard-logined-user.service'
import { AuthGuardService } from '@bc/guards/auth-guard.service'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'details/:productId',
    component: ProductComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: ProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
