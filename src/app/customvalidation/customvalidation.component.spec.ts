import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalidationComponent } from './customvalidation.component';

describe('CustomvalidationComponent', () => {
  let component: CustomvalidationComponent;
  let fixture: ComponentFixture<CustomvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
