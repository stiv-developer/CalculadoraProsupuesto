import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { BudgetItem } from '../../../shared/models/budget-item.model';

@Component({
  selector: 'app-prosupuesto-agregar-form',
  templateUrl: './prosupuesto-agregar-form.component.html',
  styleUrls: ['./prosupuesto-agregar-form.component.css']
})
export class ProsupuestoAgregarFormComponent implements OnInit {

  // @Input() item: BudgetItem = new BudgetItem('', null!);
 @Input() item!: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem!: boolean;

  ngOnInit() {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
       this.item = new BudgetItem('', null!);
    }
  }


  onSubmit(form:NgForm){
    console.log(form);
    this.formSubmit.emit(form.value);
    form.reset();
    this.displayBasic = false
  }

  // MODAL
  displayBasic: boolean = false;

  showBasicDialog() {
    this.displayBasic = true;
}
}
