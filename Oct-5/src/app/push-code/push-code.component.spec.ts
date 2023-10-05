import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushCodeComponent } from './push-code.component';

describe('PushCodeComponent', () => {
  let component: PushCodeComponent;
  let fixture: ComponentFixture<PushCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PushCodeComponent]
    });
    fixture = TestBed.createComponent(PushCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
