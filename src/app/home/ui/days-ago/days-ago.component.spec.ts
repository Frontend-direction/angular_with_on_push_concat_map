import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysAgoComponent } from './days-ago.component';

describe('DaysAgoComponent', () => {
  let component: DaysAgoComponent;
  let fixture: ComponentFixture<DaysAgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaysAgoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaysAgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
