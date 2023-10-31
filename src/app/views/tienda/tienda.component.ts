import { ProductoService } from 'src/app/services/producto.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos$ = this.productoService.productos;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private readonly afs: AngularFirestore
  ) { }

  public ngOnInit(): void {
  }

  public click(): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por el momento la opción no se encuentra disponible, por favor intente más tarde'
    });
  }

}
