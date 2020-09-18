import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ClienteComponent } from './private/cliente/cliente.component';
import { EmpleadoComponent } from './private/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { InterceptorService } from './services/Interceptor/interceptor.service';
import { ProductoComponent } from './private/producto/producto.component';
import { FacturaclienteComponent } from './private/facturacliente/facturacliente.component';
import { ProductoclienteComponent } from './private/productocliente/productocliente.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    EmpleadoComponent,
    ProductoComponent,
    FacturaclienteComponent,
    ProductoclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
