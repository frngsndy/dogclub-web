import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myself',
  imports: [DecimalPipe, FormsModule],
  templateUrl: './myself.component.html',
  styleUrl: './myself.component.css'
})
export class MyselfComponent {
  salary: number = 40000;
  items: any[] = [
    { description: 'ให้พ่อแม่', cost: 5000 },
    { description: 'ลงทุน', cost: 5000 },
    { description: 'ค่าหอ', cost: 5000 },
    { description: 'ค่าน้ำมัน', cost: 2000 },
    { description: 'ค่าของใช้', cost: 5000 },
    { description: 'ค่าข้าวเช้า', cost: 30*3*4 },
    { description: 'ค่าข้าวเที่ยง', cost: 30*3*4 },
  ];

  total() {
    return this.salary - this.items.reduce((sum, item) => sum + item.cost, 0)
  }
}
