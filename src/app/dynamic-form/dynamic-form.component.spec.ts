/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a "FormGroup" comprised of "FormControl"s', () => {
    component.ngOnInit();
    expect(component.formGroup instanceof FormGroup).toBeTruthy();
  });

  it('should create a "FormControl" for each question', () => {
    component.questions = [
      {
        controlType: 'text',
        id: 'first',
        label: 'my first',
        required: false,
        options: []
      },
      {
        controlType: 'text',
        id: 'second',
        label: 'my second',
        required: true,
        options: []
      }
    ];

    component.ngOnInit();

    expect(Object.keys(component.formGroup.controls)).toEqual(['first', 'second']);
  });
});
