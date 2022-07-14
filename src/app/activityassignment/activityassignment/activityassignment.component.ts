import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimelineApiService } from 'src/app/shared/timeline-api.service';

@Component({
  selector: 'app-activityassignment',
  templateUrl: './activityassignment.component.html',
  styleUrls: ['./activityassignment.component.css'],
})
export class ActivityAssignmentComponent implements OnInit {
  modal = false;
  modal2 = false;
  data = [] as any;
  projectdata = [] as any;
  usersdata = [] as any;
  activitydata = [] as any;
  main = [] as any;

  dateD = 0;
  header = [
    { key: 'projectId', label: 'Project'},
    { key: 'UserId', label: 'Username'},
    { key: 'ActivityId', label: 'Activity Name'},
    { key: 'duration', label: 'Duration (Days)' },
  ];

  activityassignmentForm = new FormGroup({
    projectId: new FormControl('',[Validators.required]),
    UserId: new FormControl('', [Validators.required]),
    ActivityId: new FormControl('',[Validators.required]),
    Dateassigned: new FormControl('', [Validators.required]),
    Datedone: new FormControl('', [Validators.required]),
    duration: new FormControl(),
  });
  
  
  

  test() {}
  changeProject(e: any) {
    this.activityassignmentForm.patchValue({
      projectId: e.target.value,
    });
  }

  changeUser(e: any) {
    this.activityassignmentForm.patchValue({
      UserId: e.target.value,
    });
  }

  changeActivity(e: any) {
    this.activityassignmentForm.patchValue({
      ActivityId: e.target.value,
    });
  }

  onSubmit() {
    const s = this.activityassignmentForm.value.Dateassigned;
    const e = this.activityassignmentForm.value.Datedone;
    const start = new Date(`${s}`);
    const end = new Date(`${e}`);
    console.log(this.activityassignmentForm.value)
    if (this.activityassignmentForm.invalid) {
      return;
    }
    this.dateD = Number(start.getDate()) - Number(end.getDate());
    this.activityassignmentForm.patchValue({
      duration: Math.abs(this.dateD),

    });

    
    
    this.http.create(this.activityassignmentForm.value, 'activityassignment').subscribe((res) => {
      this.modal = !this.modal;
      //console.log(res);
      this.activityassignmentForm.reset();
      //window.location.reload();
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
      .update(this.main?._id, [this.activityassignmentForm.value], 'activityassignment')
      .subscribe((_res) => {});
    this.modal2 = !this.modal2;
    window.location.reload();
  }
  onEdit(value: any) {
    console.log(value)
    this.modal2 = !this.modal2;
    this.activityassignmentForm.setValue({
      projectId: value?.projectId,
      UserId: value?.UserId,
      ActivityId : value?.ActivityId,
      Dateassigned: this.formatDate(value?.Dateassigned),
      Datedone: this.formatDate(value?.Datedone),
      duration: value?.duration,
    });
    this.main = value;
  }

  onDelete(value: any) {
    if (!value) {
      console.log('not found');
      return;
    } //console.log(this.http.findOne(this.projectForm.value.id) )
    this.http.delete(value, 'activityassignment').subscribe((_res) => {});
    window.location.reload();
  }

  constructor(private http: TimelineApiService) {}

  ngOnInit(): void {
     this.http.find('activityassignment').subscribe((res) => {
       console.log(res);
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

  formatDate(date: Date) {
    if(!date) {
      return null;
    }

    // eslint-disable-next-line prefer-const
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      // eslint-disable-next-line prefer-const
      year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
