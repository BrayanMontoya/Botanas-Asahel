import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './views/acerca-de/acerca-de.component';
import { CarritoComponent } from './views/carrito/carrito.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { RegistrarComponent } from './views/registrar/registrar.component';
import { TiendaComponent } from './views/tienda/tienda.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'pedidos',
    component: PedidosComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
