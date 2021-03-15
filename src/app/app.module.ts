import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProsupuestoModule } from './prosupuesto/prosupuesto.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProsupuestoEditarModalComponent } from './prosupuesto/prosupuesto-editar-modal/prosupuesto-editar-modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProsupuestoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents:[ProsupuestoEditarModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
