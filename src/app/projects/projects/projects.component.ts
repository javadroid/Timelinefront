import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimelineApiService } from 'src/app/shared/timeline-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  modal = false;
  modal2 = false;
  data = [] as any;
  main = [] as any;

  dateD = 0;
  header = [
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'duration', label: 'Duration (Days)' },
  ];

  projectForm = new FormGroup({
    //users form
    name: new FormControl('', [
      Validators.required /**  Validators.pattern(/\s/)***/,
    ]),
    description: new FormControl('', [Validators.required]),
    cost: new FormControl(Number(''), [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    duration: new FormControl(),
  });

  test() {}

  onSubmit() {
    const s = this.projectForm.value.startDate;
    const e = this.projectForm.value.endDate;
    const start = new Date(`${s}`);
    const end = new Date(`${e}`);
    if (this.projectForm.invalid) {
      return;
    }
    this.dateD = Number(start.getDate()) - Number(end.getDate());
    this.projectForm.patchValue({
      duration: Math.abs(this.dateD),
    });

    this.http.create(this.projectForm.value, 'project').subscribe((res) => {
      this.modal = !this.modal;
      console.log(res);
      this.projectForm.reset();
      window.location.reload();
    });
  }

  onClick() {
    this.modal = !this.modal;
  }
  onClick2() {
    this.modal2 = !this.modal2;
  }

  onUpdate() {
    const s = this.projectForm.value.startDate;
    const e = this.projectForm.value.endDate;
    const start = new Date(`${s}`);
    const end = new Date(`${e}`);
    if (!this.projectForm.valid && !this.main) {
      console.log('not found');
      return;
    }
    this.dateD = Number(start.getDate()) - Number(end.getDate());
    this.projectForm.patchValue({
      duration: Math.abs(this.dateD),
    });
    const a = this.http
      .update(this.main?._id, [this.projectForm.value], 'project')
      .subscribe((res) => {});
    this.modal2 = !this.modal2;
    window.location.reload();
  }
  onEdit(value: any) {
    this.modal2 = !this.modal2;
    this.projectForm.setValue({
      name: value?.name,
      description: value?.description,
      cost: value?.cost,
      startDate: value?.startDate,
      endDate: value?.endDate,
      duration: value?.duration,
    });
    this.main = value;
  }

  onDelete(value: any) {
    if (!value) {
      console.log('not found');
      return;
    } //console.log(this.http.findOne(this.projectForm.value.id) )
    this.http.delete(value, 'project').subscribe((res) => {});
    window.location.reload();
  }

  constructor(private http: TimelineApiService) {}

  ngOnInit(): void {
    const a = this.http.find('project').subscribe((res) => {
      this.data = res;
      
    });
  }
}
