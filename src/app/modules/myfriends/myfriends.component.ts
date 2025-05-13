import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleSheetService } from 'src/app/services/google-sheet.service';

@Component({
  selector: 'app-myfriends',
  imports: [CommonModule],
  templateUrl: './myfriends.component.html',
  styleUrl: './myfriends.component.css'
})
export class MyfriendsComponent {
  data: any[] = [];

  constructor(private sheetService: GoogleSheetService) { }

  ngOnInit() {
    this.sheetService.getSheetData().subscribe(result => {
      this.data = result;
    });
  }
}
