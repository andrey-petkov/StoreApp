import { RouterModule, Routes } from "@angular/router";
import {AuthGuard} from "./guards/auth-guard.service";
import {NewProductComponent} from "./components/new-product/new-product.component";
import {SalesComponent} from "./components/sales/sales.component";
import {LoginComponent} from "./components/login-component/login.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: 'new', component: NewProductComponent, canActivate: [AuthGuard] },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule {}
