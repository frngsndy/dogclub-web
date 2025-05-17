import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkDropList, CdkDrag, DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-demo',
  imports: [DecimalPipe, FormsModule, DragDropModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  base = 34500;
  house = this.base * 0.15;
  income = this.base + this.house;
  overyear = this.base * 12;
  net = this.overyear - 169000;
  tax1 = (this.net - 150000) * 0.05;

  items: any[] = [
    // { month: 'JAN', salary: 37111.13 },
    { month: 'JAN', salary: 37636.79, bonus: 34529.9 },
    { month: 'FEB', salary: 38316.79, bonus: 22566.6 },
    { month: 'MAR', salary: 38316.79, bonus: 0 },
    { month: 'APR', salary: 38046.79, bonus: 0 },
  ];

  total(value: string) {
    return this.items.reduce((sum, item) => sum + (item[value] || 0), 0)
  }

  check() {
    console.log(this.items);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
