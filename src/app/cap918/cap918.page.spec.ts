import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap918Page } from './cap918.page';

describe('Cap918Page', () => {
  let component: Cap918Page;
  let fixture: ComponentFixture<Cap918Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cap918Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap918Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
