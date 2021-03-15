import { Component, Inject, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-prosupuesto-editar-modal',
  templateUrl: './prosupuesto-editar-modal.component.html',
  styleUrls: ['./prosupuesto-editar-modal.component.css']
})
export class ProsupuestoEditarModalComponent implements OnInit {



  ngOnInit(): void {
  }
  onSubmitted(updatedItem: BudgetItem) {
  }
}
