import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessdetailmasterComponent } from './processdetailmaster.component';

describe('ProcessdetailmasterComponent', () => {
  let component: ProcessdetailmasterComponent;
  let fixture: ComponentFixture<ProcessdetailmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessdetailmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessdetailmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
