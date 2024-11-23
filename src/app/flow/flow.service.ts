import { Injectable } from '@angular/core';
import { FlowData } from './flow-data.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  private flowList: FlowData[] = [
    { id: 1, name: 'A', desc: 'A1' },
    { id: 2, name: 'B', desc: 'B1' },
    { id: 3, name: 'C', desc: 'C1' },
    { id: 4, name: 'D', desc: 'D1' },
    { id: 5, name: 'E', desc: 'E1' },
    { id: 6, name: 'F', desc: 'F1' },
    { id: 7, name: 'G', desc: 'G1' },
    { id: 8, name: 'H', desc: 'H1' },
    { id: 9, name: 'I', desc: 'I1' },
    { id: 10, name: 'J', desc: 'J1' },
    { id: 11, name: 'AA', desc: 'X' },
    { id: 12, name: 'BB', desc: 'X' },
    { id: 13, name: 'CC', desc: 'X' },
    { id: 14, name: 'DD', desc: 'X' },
    { id: 15, name: 'EE', desc: 'X' },
    { id: 16, name: 'FF', desc: 'X' },
    { id: 17, name: 'GG', desc: 'X' },
    { id: 18, name: 'HH', desc: 'X' },
    { id: 19, name: 'II', desc: 'X' },
    { id: 20, name: 'JJ', desc: 'X' },
  ]

  constructor() { }

  getAllFlowData(): Observable<FlowData[]> {
    return of(this.flowList);
  }

  getAllFlowDataById(id: number): FlowData | undefined {
    return this.flowList.find((flow) => flow.id === id);
  }
}
