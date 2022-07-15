import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimelineApiService } from 'src/app/shared/services/timeline-api.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  modal = false;
  modal2 = false;
  data = [] as any;
  main = [] as any;
  projectdata = [] as any;
  usersdata = [] as any;
  activitydata = [] as any;


  dateD = 0;
  header = [
    { key: 'project', label: 'Project' },
    { key: 'activity', label: 'Activity' },
    { key: 'user', label: 'User' },
    { key: 'log', label: 'Log' },
    { key: 'reporterId', label: 'Reporter' },
    { key: 'reportedAt', label: 'ReportedAt (Date)' },
    { key: 'assignedTo', label: 'AssignedTo' },
    { key: 'dateResolved', label: 'DateResolved (Date)' },
    { key: 'response', label: 'Response' },
    { key: 'responseConfirm', label: 'ResponseConfirm' },
    { key: 'responseConfirmDate', label: 'ResponseConfirmDate (Date)' },

  ];

  logForm = new FormGroup({
    //users form
    project: new FormControl('', [Validators.required]),
    activity: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required]),
    log: new FormControl('', [Validators.required]),
    reporterId: new FormControl('', [Validators.required]),
    reportedAt: new FormControl('', [Validators.required]),
    assignedTo: new FormControl('', [Validators.required]),
    dateResolved: new FormControl('', [Validators.required]),
    response: new FormControl('', [Validators.required]),
    responseConfirm: new FormControl('', [Validators.required]),
    responseConfirmDate: new FormControl('', [Validators.required]),
  });

  test() {}

  changeProject(e: any) {
    this.logForm.patchValue({
      project: e.target.value,
    });
  }

  changeUsername(e: any) {
    this.logForm.patchValue({
      user: e.target.value,
    });
  }

  changeActivity(e: any) {
    this.logForm.patchValue({
      activity: e.target.value,
    });
  }

  onSubmit() {
    this.http.create(this.logForm.value, 'log').subscribe((res) => {
      this.modal = !this.modal;
      console.log(res);
      this.logForm.reset();
      // window.location.reload();
    });
  }

  onClick() {
    this.modal = !this.modal;
  }
  onClick2() {
    this.modal2 = !this.modal2;
  }

  onUpdate() {
    const a = this.http
      .update(this.main?._id, [this.logForm.value], 'log')
      .subscribe((res) => {});
    this.modal2 = !this.modal2;
    window.location.reload();
  }
  onEdit(value: any) {
    this.modal2 = !this.modal2;

    console.log("LogForm Value", this.logForm.value);

    this.logForm.patchValue(value);
     this.logForm.setValue({
      project: value?.project,
      activity: value?.activity,
      user: value?.user,
      log: value?.log,
      reporterId: value?.reporterId,
      reportedAt: value?.reportedAt,
      assignedTo: value?.assignedTo,
      dateResolved: value?.dateResolved,
      response: value?.response,
      responseConfirm: value?.responseConfirm,
      responseConfirmDate: value?.responseConfirmDate
    });
    this.main = value;

    console.log("LogForm Value ", this.logForm.value)
  }

  onDelete(value: any) {
    if (!value) {
      console.log('not found');
      return;
    } //console.log(this.http.findOne(this.projectForm.value.id) )
    this.http.delete(value, 'log').subscribe((res) => {});
    window.location.reload();
  }

  constructor(private http: TimelineApiService) {}

  ngOnInit(): void {
    const a = this.http.find('log').subscribe((res) => {
      console.log(res)
      this.data = res;
    });

    this.http.find('project').subscribe((res) => {
      this.projectdata = res;
    });

    this.http.find('users').subscribe((res) => {
      this.usersdata = res;
    });

    this.http.find('activity').subscribe((res) => {
      this.activitydata = res;
    });

  }
}
function log(log: any) {
  throw new Error('Function not implemented.');
}

