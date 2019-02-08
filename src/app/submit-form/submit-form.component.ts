import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatysModel } from '../models/statys.model';
import { FirebaseService } from '../firebase.service';
import { NewsModel } from '../models/news.model';
import { toDate } from '@angular/common/src/i18n/format_date';
import { __values } from 'tslib';
import { validate } from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  // submitForm = new FormGroup({
  //   subjectType: new FormControl('', Validators.required),
  //   subjectText: new FormControl('', Validators.required),
  //   subjectStartDate: new FormControl('', Validators.required),
  //   subjectEndDate: new FormControl('', Validators.required),
  //   subjectStatus: new FormControl(false)
  // });
  date: any;

  submitForm = new FormGroup({
    subjectType: new FormControl(''),
    subjectText: new FormControl(''),
    subjectStartDate: new FormControl(''),
    subjectEndDate: new FormControl(''),
    subjectStatus: new FormControl(false)
  });

  constructor(private db: FirebaseService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.submitForm.value);
    console.log(this.date);
    // this.date = this.submitForm.value.toString();
    // console.log(this.subjectStartDate1);
    this.db.postData(this.submitForm.value);
  }
  myFilter = (d: Date): any => {
    // console.log(d);
    // const day = d.getDay();
    // console.log(day);
    d.toISOString();
    // d.toDateString();
    // console.log(d);
    return d;
    // THIS FUNCTION CANNOT ACCESS THE VARIABLE 'someDateToBlock'
    // return this.someDateToBlock;
  }

}
