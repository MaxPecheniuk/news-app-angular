import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatysModel } from '../models/statys.model';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  // selectedType: string;
  submitForm = new FormGroup({
    subjectType: new FormControl(''),
    subjectText: new FormControl(''),
    subjectStartDate: new FormControl(''),
    subjectEndDate: new FormControl(''),
    subjectStatus: new FormControl('')
  });
  // subjectStatus: Array<StatysModel> = [
  //   {value: 'news', viewValue: 'News'},
  //   {value: 'Announcement', viewValue: 'Announcement'},
  //   {value: 'Support request', viewValue: 'Support request'}
  // ]
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.submitForm.value);
  }

}
