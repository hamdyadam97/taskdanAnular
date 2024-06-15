import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoStatsComponent } from './moto-stats.component';

describe('MotoStatsComponent', () => {
  let component: MotoStatsComponent;
  let fixture: ComponentFixture<MotoStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
