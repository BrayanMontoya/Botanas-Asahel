import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Observable<Producto[]>;
  public productosCollection: AngularFirestoreCollection<Producto>;

  constructor(private readonly afs: AngularFirestore) {
    this.productosCollection = afs.collection<Producto>('productos');
    this.consultar();
  }

  public consultar(): void {
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Producto))
    );
  }


}
