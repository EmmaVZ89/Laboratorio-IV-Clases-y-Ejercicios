import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-padre',
  templateUrl: './page-padre.component.html',
  styleUrls: ['./page-padre.component.scss'],
})
export class PagePadreComponent implements OnInit {
  listadoProductos: any[];
  productoActivo: any = {};

  constructor() {
    this.listadoProductos = [
      { precio: 300, marca: 'Pan', stock: 21 },
      { precio: 180, marca: 'Leche', stock: 20 },
      { precio: 450, marca: 'Yerba', stock: 33 },
      { precio: 890, marca: 'Queso', stock: 46 },
      { precio: 230, marca: 'Azucar', stock: 57 },
    ];
  }

  ngOnInit(): void {}

  funcionLocal($event: any) {
    this.listadoProductos.push($event);
    console.info('El dato en el principal', $event);
  }

  TomarProductoSeleccionado($event: any) {
    this.productoActivo = $event;
    console.info('Evento ', $event);
  }
}
