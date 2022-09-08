import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagePadreComponent } from './ejemploInputOutput/page/page-padre/page-padre.component';
import { ComponenteAltaComponent } from './ejemploInputOutput/componente/componente-alta/componente-alta.component';
import { ComponenteDetalleComponent } from './ejemploInputOutput/componente/componente-detalle/componente-detalle.component';
import { ComponenteListadoComponent } from './ejemploInputOutput/componente/componente-listado/componente-listado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PagePadreComponent,
    ComponenteAltaComponent,
    ComponenteDetalleComponent,
    ComponenteListadoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
