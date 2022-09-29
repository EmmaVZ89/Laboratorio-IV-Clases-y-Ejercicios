import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesGuard } from './guardianes/perfiles.guard';
import { BackofficeComponent } from './pages/backoffice/backoffice.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:"", component:BienvenidaComponent},
  {path:"login", component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  {path:"backoffice", component:BackofficeComponent, canActivate:[PerfilesGuard]},
  {path:"errorLogin", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
