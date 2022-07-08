import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimelineApiService } from 'src/app/shared/timeline-api.service';

@Component({
  selector: 'app-projectpersonnels',
  templateUrl: './projectpersonnels.component.html',
  styleUrls: ['./projectpersonnels.component.css'],
})
export class ProjectPersonnelsComponent implements OnInit {
  modal = false;
  modal2 = false;
  data = [] as any;
  main = [] as any;

  dateD = 0;
  header = [
    { key: 'name', label: 'Name' },
    { key: 'ProjectId', label: 'Project'},
    { key: 'Personneltype', label: 'PersonnelType' },
  ];

  projectpersonnelsForm = new FormGroup({
    //users form
    name: new FormControl('', [Validators.required]),
    ProjectId: new FormControl('',[Validators.required]),
    Personneltype: new FormControl('', [Validators.required]),
  });

  test() {}

  onSubmit() {
    this.http.create(this.projectpersonnelsForm.value, 'project-personnels').subscribe((res) => {
      this.modal = !this.modal;
      console.log(res);
      this.projectpersonnelsForm.reset();
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
      .update(this.main?._id, [this.projectpersonnelsForm.value], 'project-personnels')
      .subscribe((_res) => {});
    this.modal2 = !this.modal2;
    window.location.reload();
  }
  onEdit(value: any) {
    this.modal2 = !this.modal2;
    this.projectpersonnelsForm.setValue({
      name: value?.name,
      ProjectId : value?.ProjectId,
      Personneltype: value?.Personneltype, 
    });
    this.main = value;
  }

  onDelete(value: any) {
    if (!value) {
      console.log('not found');
      return;
    } //console.log(this.http.findOne(this.projectForm.value.id) )
    this.http.delete(value, 'project-personnels').subscribe((_res) => {});
    window.location.reload();
  }

  constructor(private http: TimelineApiService) {}

  ngOnInit(): void {
    const a = this.http.find('project-personnels').subscribe((res) => {
      console.log('data ', res)
      this.data = res;
    });
  }
}
