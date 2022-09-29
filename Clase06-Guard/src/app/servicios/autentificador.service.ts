import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificadorService {

  estaLogeado = false;

  constructor() { }

  public registrar(){}

  public logear(){
    this.estaLogeado = true;
  }

  public deslogear(){
    this.estaLogeado = false;
  }


}
