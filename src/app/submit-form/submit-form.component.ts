import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatysModel } from '../models/statys.model';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  submitForm = new FormGroup({
    subjectType: new FormControl('', Validators.required),
    subjectText: new FormControl('', Validators.required),
    subjectStartDate: new FormControl('', Validators.required),
    subjectEndDate: new FormControl('', Validators.required),
    subjectStatus: new FormControl(false)
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.submitForm.value);
  }

}
