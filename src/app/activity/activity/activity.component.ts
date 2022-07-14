import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimelineApiService } from 'src/app/shared/services/timeline-api.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class activityComponent implements OnInit {
  modal = false;
  modal2 = false;
  projectdata = [] as any;
  data = [] as any;
  main = [] as any;

  dateD = 0;
  header = [
    { key: 'name', label: 'Name' },
    { key: 'Description', label: 'Description' },
    { key: 'duration', label: 'Duration (Days)' },
  ];

  activityForm = new FormGroup({
    //users form
    name: new FormControl('',[Validators.required]),
    Description: new FormControl('', [Validators.required]),
    StartDate: new FormControl('', [Validators.required]),
    EndDate: new FormControl('', [Validators.required]),
    duration: new FormControl(),
  });

  test() {}

  onSubmit() {
    const s = this.activityForm.value.StartDate;
    const e = this.activityForm.value.EndDate;
    const start = new Date(`${s}`);
    const end = new Date(`${e}`);
    console.log(this.activityForm.value)
    if (this.activityForm.invalid) {
      return;
    }
    this.dateD = Number(start.getDate()) - Number(end.getDate());
    this.activityForm.patchValue({
      duration: Math.abs(this.dateD),
    });

    this.http.create(this.activityForm.value, 'activity').subscribe((res) => {
      this.modal = !this.modal;
      console.log(res);
      this.activityForm.reset();
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
    const s = this.activityForm.value.StartDate;
    const e = this.activityForm.value.EndDate;
    const start = new Date(`${s}`);
    const end = new Date(`${e}`);
    if (!this.activityForm.valid && !this.main) {
      console.log('not found');
      return;
    }
    this.dateD = Number(start.getDate()) - Number(end.getDate());
    this.activityForm.patchValue({
      duration: Math.abs(this.dateD),
    });
    const a = this.http
      .update(this.main?._id, [this.activityForm.value], 'activity')
      .subscribe((res) => {});
    this.modal2 = !this.modal2;
    //window.location.reload();
  }
  onEdit(value: any) {
    this.modal2 = !this.modal2;
    this.activityForm.setValue({
      name: value?.name,
      Description: value?.description,
      StartDate: this.formatDate(value?.StartDate), 
      EndDate: this.formatDate(value?.EndDate),
      duration: value?.duration,
    });
    this.main = value;
  }

  onDelete(value: any) {
    if (!value) {
      console.log('not found');
      return;
    } //console.log(this.http.findOne(this.activityForm.value.id) )
    this.http.delete(value, 'activity').subscribe((res) => {});
    //window.location.reload();
  }

  constructor(private http: TimelineApiService) {}

  ngOnInit(): void {
    this.http.find('activity').subscribe((res) => {
      this.data = res;
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
