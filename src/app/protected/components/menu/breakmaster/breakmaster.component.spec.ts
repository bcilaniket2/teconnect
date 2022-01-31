import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakmasterComponent } from './breakmaster.component';

describe('BreakmasterComponent', () => {
  let component: BreakmasterComponent;
  let fixture: ComponentFixture<BreakmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
