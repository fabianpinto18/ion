import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseParkPage } from './choose-park.page';

describe('ChooseParkPage', () => {
  let component: ChooseParkPage;
  let fixture: ComponentFixture<ChooseParkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseParkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
