import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureAddComponent } from './manufacture-add.component';

describe('ManufactureAddComponent', () => {
  let component: ManufactureAddComponent;
  let fixture: ComponentFixture<ManufactureAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
