import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})


export class RegistrarComponent implements OnInit {

  public btnSubmit = false;
  public usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  public ngOnInit(): void {
  }

  public enviarFormulario(formulario: NgForm): void {
    this.btnSubmit = true;
    if (formulario.valid) {
      this.usuario.fechaAlta = new Date();
      this.usuarioService.agregar(this.usuario, this.usuario.idUsuario);
      Swal.fire({
        icon: 'success',
        title: '¡Registrado!.',
        text: 'Se ha creado su cuenta correctamente'
      });
      this.router.navigate(['inicio']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llene los campos correctamente'
      });
    }
    this.usuario = new Usuario();
    formulario.resetForm();
    this.btnSubmit = false;
  }

}
