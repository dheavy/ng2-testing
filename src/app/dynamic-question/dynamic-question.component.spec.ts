/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DynamicQuestionComponent } from './dynamic-question.component';

describe('DynamicQuestionComponent', () => {
  let component: DynamicQuestionComponent;
  let fixture: ComponentFixture<DynamicQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicQuestionComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });
});
