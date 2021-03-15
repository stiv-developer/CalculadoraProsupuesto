import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ProsupuestoListaComponent } from './prosupuesto-lista/prosupuesto-lista.component';
import { ProsupuestoAgregarFormComponent } from './prosupuesto-agregar-form/prosupuesto-agregar-form.component';
import { ProsupuestoCardComponent } from './prosupuesto-lista/prosupuesto-card/prosupuesto-card.component';
import { ProsupuestoEditarModalComponent } from './prosupuesto-editar-modal/prosupuesto-editar-modal.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    //Componentes
    MainPageComponent, 
    ProsupuestoListaComponent, 
    ProsupuestoAgregarFormComponent,
    ProsupuestoCardComponent, 
    ProsupuestoEditarModalComponent],
  exports: [
    MainPageComponent, 
    ProsupuestoListaComponent, 
    ProsupuestoAgregarFormComponent,
    ProsupuestoCardComponent, 
    ProsupuestoEditarModalComponent
    ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
    ]
})
export class ProsupuestoModule { }
