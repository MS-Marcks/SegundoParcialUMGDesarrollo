import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { ClienteComponent } from './private/cliente/cliente.component';
import { EmpleadoComponent } from './private/empleado/empleado.component';
import { ProductoComponent } from './private/producto/producto.component';
import { FacturaclienteComponent } from './private/facturacliente/facturacliente.component';
import { ProductoclienteComponent } from './private/productocliente/productocliente.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard]},
  {path: 'empleado', component: EmpleadoComponent, canActivate:  [AuthGuard]},
  {path: 'producto', component: ProductoComponent, canActivate:  [AuthGuard]},
  {path: 'cliente/factura', component: FacturaclienteComponent, canActivate:  [AuthGuard]},
  {path: 'cliente/factura/detalle', component: ProductoclienteComponent, canActivate:  [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
