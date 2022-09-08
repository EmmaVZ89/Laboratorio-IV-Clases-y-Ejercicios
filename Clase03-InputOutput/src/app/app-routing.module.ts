import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePadreComponent } from './ejemploInputOutput/page/page-padre/page-padre.component';

const routes: Routes = [
  { path:"InputOuput", component:PagePadreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
