import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyselfComponent } from './myself.component';

describe('MyselfComponent', () => {
  let component: MyselfComponent;
  let fixture: ComponentFixture<MyselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyselfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
