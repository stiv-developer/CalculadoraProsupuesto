import { NgModule } from '@angular/core';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
// ANGULAR MATERIAL
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    FieldsetModule,
    ToolbarModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    MatDialogModule
  ]
})
export class PrimeNgModule { }
