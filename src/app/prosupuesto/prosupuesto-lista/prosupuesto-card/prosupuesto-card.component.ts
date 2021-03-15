import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-prosupuesto-card',
  templateUrl: './prosupuesto-card.component.html',
  styleUrls: ['./prosupuesto-card.component.scss']
})
export class ProsupuestoCardComponent implements OnInit {

  @Input() item!: BudgetItem;
  
  @Input() isIncome:boolean = true;

  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick(){
    this.xButtonClick.emit();
   }
 
   onCardClick(){
    this.cardClick.emit();
   }
}
