import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usarios: Observable<Usuario[]>;
  public usuariosCollection: AngularFirestoreCollection<Usuario>;

  constructor(private readonly afs: AngularFirestore) {
    this.usuariosCollection = afs.collection<Usuario>('usuarios');
    this.consultar();
  }

  public consultar(): void {
    this.usarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Usuario))
    );
  }

  public agregar(usuario: Usuario, idUsario: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = idUsario || this.afs.createId();
        const data = {id, ...usuario};
        const result = this.usuariosCollection.doc(id).set(data);
        resolve(result);
      } catch (error){
        reject(error.mesagge);
      }
    });

  }

}
