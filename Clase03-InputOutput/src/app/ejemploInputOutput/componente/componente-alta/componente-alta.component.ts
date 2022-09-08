import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-alta',
  templateUrl: './componente-alta.component.html',
  styleUrls: ['./componente-alta.component.scss'],
})
export class ComponenteAltaComponent implements OnInit {

  @Output() CreamosUnProducto: EventEmitter<any> = new EventEmitter<any>();

  unProducto: any = {};
  stock = 0;
  marca = 'nada';
  precio = 0;

  constructor() {}

  ngOnInit(): void {}

  GuardarProducto() {
    this.unProducto.stock = this.stock;
    this.unProducto.marca = this.marca;
    this.unProducto.precio = this.precio;

    // disparamos el evento
    this.CreamosUnProducto.emit(this.unProducto);

    console.info('El producto: ', this.unProducto);
  }
}
