import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-listado',
  templateUrl: './componente-listado.component.html',
  styleUrls: ['./componente-listado.component.scss'],
})
export class ComponenteListadoComponent implements OnInit {

  @Input() listadoRecibido?: any[];
  @Output() SeleccioneUnProducto: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  SeleccionarProducto(producto: any) {
    this.SeleccioneUnProducto.emit(producto);
    console.info('El producto seleccionado: ', producto);
  }
}
