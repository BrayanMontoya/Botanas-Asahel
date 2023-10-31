import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por el momento no cuenta con productos en el carrito'
    });
    setTimeout(() => {
      this.router.navigate(['inicio']);
    }, 2500);
  }

}
