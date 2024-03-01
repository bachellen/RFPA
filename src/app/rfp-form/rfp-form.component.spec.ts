import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfpFormComponent } from './rfp-form.component';

describe('RfpFormComponent', () => {
  let component: RfpFormComponent;
  let fixture: ComponentFixture<RfpFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RfpFormComponent]
    });
    fixture = TestBed.createComponent(RfpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
