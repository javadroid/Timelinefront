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

  dateD = 0;
  header = [
    { key: 'projectId', label: 'Project' },
    { key: 'ActivityId', label: 'Activity' },
    { key: 'UserId', label: 'User' },
    { key: 'Bug', label: 'Bug' },
    { key: 'ReporterId', label: 'Reporter' },
    { key: 'ReportedAt', label: 'ReportedAt (Date)' },
    { key: 'AssignedTo', label: 'AssignedTo' },
    { key: 'DateResolved', label: 'DateResolved (Date)' },
    { key: 'Response', label: 'Response' },
    { key: 'ResponseConfirm', label: 'ResponseConfirm' },
    { key: 'ResponseConfirmDate', label: 'ResponseConfirmDate (Date)' },

  ];

  logForm = new FormGroup({
    //users form
    projectId: new FormControl('', [Validators.required]),
    ActivityId: new FormControl('', [Validators.required]),
    UserId: new FormControl('', [Validators.required]),
    Bug: new FormControl('', [Validators.required]),
    ReporterId: new FormControl('', [Validators.required]),
    ReportedAt: new FormControl('', [Validators.required]),
    AssignedTo: new FormControl('', [Validators.required]),
    DateResolved: new FormControl('', [Validators.required]),
    Response: new FormControl('', [Validators.required]),
    ResponseConfirm: new FormControl('', [Validators.required]),
    ResponseConfirmDate: new FormControl('', [Validators.required]),
  });

  test() {}

  changeProject(e: any) {
    this.logForm.patchValue({
      projectId: e.target.value,
    });
  }

  changeUsername(e: any) {
    this.logForm.patchValue({
      UserId: e.target.value,
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
      projectId: value?.projectId,
      ActivityId: value?.ActivityId,
      UserId: value?.UserId,
      Bug: value?.Bug,
      ReporterId: value?.ReporterId,
      ReportedAt: value?.ReportedAt,
      AssignedTo: value?.AssignedTo,
      DateResolved: value?.DateResolved,
      Response: value?.Response,
      ResponseConfirm: value?.ResponseConfirm,
      ResponseConfirmDate: value?.ResponseConfirmDate
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
      this.data = res;
    });

    this.http.find('project').subscribe((res) => {
      this.projectdata = res;
    });

    this.http.find('users').subscribe((res) => {
      this.usersdata = res;
    });

  }
}
function log(log: any) {
  throw new Error('Function not implemented.');
}

