import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndCodeComponent } from './end-code.component';

describe('EndCodeComponent', () => {
  let component: EndCodeComponent;
  let fixture: ComponentFixture<EndCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndCodeComponent]
    });
    fixture = TestBed.createComponent(EndCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
