import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  listadoProductos:any[];

  constructor() {
    this.listadoProductos = [
      {precio:10,marca:"Algo",stock:3},
      {precio:10,marca:"Algo",stock:3},
      {precio:10,marca:"Algo",stock:3},
      {precio:10,marca:"Algo",stock:3},
      {precio:10,marca:"Algo",stock:3},
    ];
   }

  ngOnInit(): void {
  }


}
