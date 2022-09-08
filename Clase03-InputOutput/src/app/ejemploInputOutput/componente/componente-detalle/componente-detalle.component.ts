import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-detalle',
  templateUrl: './componente-detalle.component.html',
  styleUrls: ['./componente-detalle.component.scss'],
})
export class ComponenteDetalleComponent implements OnInit {
  
  @Input() productoSeleccionado: any = {};

  constructor() {}

  ngOnInit(): void {}
}
