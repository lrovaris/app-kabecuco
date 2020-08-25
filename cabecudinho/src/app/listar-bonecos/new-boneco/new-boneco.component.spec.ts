import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBonecoComponent } from './new-boneco.component';

describe('NewBonecoComponent', () => {
  let component: NewBonecoComponent;
  let fixture: ComponentFixture<NewBonecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBonecoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBonecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
