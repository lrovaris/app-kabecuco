import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonecoComponent } from './boneco.component';

describe('BonecoComponent', () => {
  let component: BonecoComponent;
  let fixture: ComponentFixture<BonecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonecoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
