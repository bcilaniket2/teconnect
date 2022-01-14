import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdetailmasterComponent } from './logdetailmaster.component';

describe('LogdetailmasterComponent', () => {
  let component: LogdetailmasterComponent;
  let fixture: ComponentFixture<LogdetailmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogdetailmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogdetailmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
