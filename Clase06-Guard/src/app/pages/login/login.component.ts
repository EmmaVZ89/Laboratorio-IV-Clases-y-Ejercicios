import { Component, OnInit } from '@angular/core';
import { AutentificadorService } from 'src/app/servicios/autentificador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private autentificadorService: AutentificadorService) {}

  ngOnInit(): void {}

  logearUsuario() {
    this.autentificadorService.logear();
    // this.autentificadorService.estaLogeado = true;
  }
}
