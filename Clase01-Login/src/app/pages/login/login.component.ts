import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  nombre: string;
  clave: string;

  constructor(private router: Router) {
    this.usuario = new Usuario();
    this.nombre = '';
    this.clave = '';
  }

  ngOnInit(): void {
    alert(`nombre = emmanuel\nclave = 123456`);
    const usuarioString: any = localStorage.getItem('usuario');
    const usuarioJson = JSON.parse(usuarioString);
    if (usuarioJson !== null) {
      if (
        this.usuario.nombre === usuarioJson.nombre &&
        this.usuario.clave === usuarioJson.clave
      ) {
        this.router.navigate(['/bienvenidos']);
      }
    }
  }

  ingresar() {
    if (
      this.nombre === this.usuario.nombre &&
      this.clave === this.usuario.clave
    ) {
      localStorage.setItem(
        'usuario',
        `{"nombre":"${this.nombre}", "clave":"${this.clave}"}`
      );
      this.router.navigate(['/bienvenidos']);
    } else {
      alert('Usuario y/o contraseña incorrectos');
    }
  }
}
