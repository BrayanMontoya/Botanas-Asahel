import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public btnSubmit = false;
  public nombre: string;
  public apellido: string;
  public correo: string;
  public asunto: string;
  public comentario: string;
  constructor(
    private http: HttpClient
    ) { }

  public ngOnInit(): void {
  }

  public enviarFormulario(formulario: NgForm): void {
    this.btnSubmit = true;
    if (formulario.valid) {
      const email = formulario.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xwkagedk',
        { name: this.nombre + this.apellido, replyto: this.correo, message: this.comentario },
        { headers }).subscribe(
          response => {
            formulario.resetForm();
            this.nombre = '';
            this.correo = '';
            this.apellido = '';
            this.comentario = '';
            this.asunto = '';
            this.btnSubmit = false;
            Swal.fire({
              icon: 'success',
              title: '¡Enviado!.',
              text: 'Pronto nos pondremos en contacto con usted'
            });
          }
        );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llene los campos correctamente'
      });
      this.btnSubmit = false;
    }
  }


}
