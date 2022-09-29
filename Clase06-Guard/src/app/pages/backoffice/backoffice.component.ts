import { Component, OnInit } from '@angular/core';
import { AutentificadorService } from 'src/app/servicios/autentificador.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
})
export class BackofficeComponent implements OnInit {
  constructor(private autentificadorService: AutentificadorService) {}

  ngOnInit(): void {}

  logoutUsuario() {
    this.autentificadorService.deslogear();
    // this.autentificadorService.estaLogeado = false;
  }
}
