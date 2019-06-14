import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksimonPage } from './parksimon.page';

describe('ParksimonPage', () => {
  let component: ParksimonPage;
  let fixture: ComponentFixture<ParksimonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParksimonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParksimonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
