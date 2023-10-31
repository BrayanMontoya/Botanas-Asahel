import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormatoCorreoDirective } from './shared/directives/formato-correo.directive';
import { FormatoTelefonoDirective } from './shared/directives/formato-telefono.directive';
import { CarritoComponent } from './views/carrito/carrito.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { HeaderComponent } from './views/header/header.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { RegistrarComponent } from './views/registrar/registrar.component';
import { TiendaComponent } from './views/tienda/tienda.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BsModalRef } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    LoginComponent,
    TiendaComponent,
    InicioComponent,
    RegistrarComponent,
    PageNotFoundComponent,
    CarritoComponent,
    PedidosComponent,
    FormatoCorreoDirective,
    FormatoTelefonoDirective
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    AngularFirestore,
    BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
