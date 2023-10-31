import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por el momento no cuenta con pedidos'
    });
    setTimeout(() => {
      this.router.navigate(['inicio']);
    }, 2500);
  }

}
