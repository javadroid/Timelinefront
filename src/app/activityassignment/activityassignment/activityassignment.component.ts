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
  main = [] as any;

  dateD = 0;
  header = [
    { key: 'ActivityId', label: 'Actvity'},
    { key: 'UserId', label: 'User' },
    { key: 'duration', label: 'Duration (Days)' },
  ];

  activityassignmentForm = new FormGroup({
    ActivityId: new FormControl('',[Validators.required]),
    Dateassigned: new FormControl('', [Validators.required]),
    Datedone: new FormControl('', [Validators.required]),
    duration: new FormControl(),
  });
  
  
  

  test() {}

  onSubmit() {
    const s = this.activityassignmentForm.value.Dateassigned;
    const e = this.activityassignmentForm.value.Datedone;
    const start = new Date(`${s}`);
    const end = new Date(`${e}`);
    if (this.activityassignmentForm.invalid) {
      return;
    }
    this.dateD = Number(start.getDate()) - Number(end.getDate());
    this.activityassignmentForm.patchValue({
      duration: Math.abs(this.dateD),
    });
    this.http.create(this.activityassignmentForm.value, 'activityassignment').subscribe((res) => {
      this.modal = !this.modal;
      console.log(res);
      this.activityassignmentForm.reset();
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
      .update(this.main?._id, [this.activityassignmentForm.value], 'activityassignment')
      .subscribe((_res) => {});
    this.modal2 = !this.modal2;
    window.location.reload();
  }
  onEdit(value: any) {
    this.modal2 = !this.modal2;
    this.activityassignmentForm.setValue({
      ActivityId : value?.ActivityId,
      Dateassigned: value?.Dateassigned,
      Datedone: value?.Datedone,
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
    const a = this.http.find('activityassignment').subscribe((res) => {
      console.log('data ', res)
      this.data = res;
    });
  }
}
