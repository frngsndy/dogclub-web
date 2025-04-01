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
  salary = signal<number>(34500);
  house = signal<number>(this.salary() * 15 / 100);
  items: any[] = [
    { description: 'ประกันสังคม', cost: 750 },
    { description: 'สำรองเลี้ยงชีพ', cost: this.salary() * 5/100 },
    { description: 'ให้พ่อแม่', cost: 5000 },
    { description: 'ลงทุน', cost: 5000 },
    { description: 'ค่าหอ', cost: 5000 },
    { description: 'ค่าน้ำมัน', cost: 2000 },
    { description: 'ค่าของใช้', cost: 5000 },
    { description: 'ค่าอาหาร', cost: 30 * 30 * 3 },
    { description: 'บัตรเครดิต', cost: 2890 + 3490 },
  ];

  total() {
    return this.salary() + this.house() - this.items.reduce((sum, item) => sum + item.cost, 0)
  }
}
