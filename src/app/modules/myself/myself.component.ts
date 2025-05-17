import { DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myself',
  imports: [DecimalPipe, FormsModule],
  templateUrl: './myself.component.html',
  styleUrl: './myself.component.css'
})
export class MyselfComponent {
  
  items: any[] = [
    // { month: 'JAN', salary: 37111.13 },
    { month: 'JAN', salary: 37636.79, bonus: 34529.9 },
    { month: 'FEB', salary: 38316.79, bonus: 22566.6 },
    { month: 'MAR', salary: 38316.79, bonus: 0 },
    { month: 'APR', salary: 38046.79, bonus: 0 },
    { month: 'MAY', salary: 0, bonus: 0 },
    { month: 'JUN', salary: 0, bonus: 0 },
    { month: 'JUL', salary: 0, bonus: 0 },
    { month: 'AUG', salary: 0, bonus: 0 },
    { month: 'SEP', salary: 0, bonus: 0 },
    { month: 'OCT', salary: 0, bonus: 0 },
    { month: 'NOV', salary: 0, bonus: 0 },
    { month: 'DEC', salary: 0, bonus: 0 },
  ];

  total(value: string) {
    return this.items.reduce((sum, item) => sum + (item[value] || 0), 0)
  }

}
