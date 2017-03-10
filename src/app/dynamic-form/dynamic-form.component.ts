import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Question } from '../models';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Question[];

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.generateForm(this.questions || []);
  }

  private generateForm(questions: Question[]): FormGroup {
    return new FormGroup(questions.reduce(this.generateControl, {}));
  }

  private generateControl(controls: any, question: Question): FormControl {
    question.required ?
      controls[question.id] = new FormControl(question.value || '', Validators.required) :
      controls[question.id] = new FormControl(question.value || '');

    return controls;
  }

}
