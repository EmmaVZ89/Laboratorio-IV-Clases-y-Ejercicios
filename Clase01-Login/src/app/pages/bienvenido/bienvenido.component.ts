import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss'],
})
export class BienvenidoComponent implements OnInit {
  usuario: Usuario;

  constructor(private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    const usuarioString: any = localStorage.getItem('usuario');
    const usuarioJson = JSON.parse(usuarioString);
    if (usuarioJson !== null) {
      if (
        this.usuario.nombre !== usuarioJson.nombre ||
        this.usuario.clave !== usuarioJson.clave
      ) {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
