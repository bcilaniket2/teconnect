import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedmaterialmasterComponent } from './rejectedmaterialmaster.component';

describe('RejectedmaterialmasterComponent', () => {
  let component: RejectedmaterialmasterComponent;
  let fixture: ComponentFixture<RejectedmaterialmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedmaterialmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedmaterialmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
