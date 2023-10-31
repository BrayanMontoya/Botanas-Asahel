import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios$ = this.usuarioService.usarios;
  public loging = false;
  public btnSubmit = false;
  public usuarios: [];
  public usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private readonly afs: AngularFirestore
  ) { }

  public ngOnInit(): void {
    let user = sessionStorage.getItem('idUsuario');
    if (user === 'true') {
      this.btnSubmit = true;
    }
  }

  public enviarFormulario(formulario: NgForm): void {
    this.btnSubmit = true;
    if (formulario.valid) {
      this.afs
      .collection('usuarios', ref => ref.where('correo', '==', this.usuario.correo)
        .where('contrasena', '==', this.usuario.contrasena))
        .valueChanges()
      .subscribe(data => {
        if (data.length > 0) {
          sessionStorage.setItem('idUsuario', 'true');
          this.router.navigate(['inicio']).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Correo/Contraseña incorrecta'
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese correctamente su Correo/Contraseña'
      });
    }
    this.btnSubmit = false;
  }


}
