import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { ProsupuestoEditarModalComponent } from '../prosupuesto-editar-modal/prosupuesto-editar-modal.component';
import { ProsupuestoAgregarFormComponent } from '../prosupuesto-agregar-form/prosupuesto-agregar-form.component';

@Component({
  selector: 'app-prosupuesto-lista',
  templateUrl: './prosupuesto-lista.component.html',
  styleUrls: ['./prosupuesto-lista.component.css']
})
export class ProsupuestoListaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() budgetItems!: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  ngOnInit(): void {
  }
  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
  }
}
  export interface UpdateEvent {
    old: BudgetItem;
    new: BudgetItem;
  }