import { Component } from '@angular/core';
import { FlowService } from './flow.service';
import { lastValueFrom } from 'rxjs';
import { FlowData } from './flow-data.model';

@Component({
  selector: 'app-flow',
  standalone: false,

  templateUrl: './flow.component.html',
  styleUrl: './flow.component.scss'
})
export class FlowComponent {
  
  flowList: FlowData[] = [];

  constructor(private flowService: FlowService) {
    this.flowService.getAllFlowData().subscribe(data => {
      this.flowList = data
    });
  }

}
