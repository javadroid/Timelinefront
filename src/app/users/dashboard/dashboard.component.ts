
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimelineApiService } from 'src/app/shared/services/timeline-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  modal = false;
  dateD=0
  modal2=false
  main=[] as any
  data = [] as any;
  rese=[]as any
  projectdata = [] as any[];
  activitydata = [] as any[];
  assigndata = [] as any[];
  test = [] as any[];
  act=false

  constructor(private http: TimelineApiService) {}

  projectForm = new FormGroup({
    //users form
    name: new FormControl('', [Validators.required ]),
    description: new FormControl('', [Validators.required]),
    cost: new FormControl(Number(''), [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    duration: new FormControl(),
  });

  ngOnInit(): void {

    this.projectForm.value.cost

    this.syncProjectActivity()

  }
  onclick(){
    this.modal = !this.modal;
  }
  onclick2(){
    this.modal2 = !this.modal2;
  }
  onEdit(value:any) {
    this.modal = !this.modal;
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

onSubmit(){
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
    this.http
      .update(this.main?._id, [this.projectForm.value], 'project')
      .subscribe((res) => {console.log(res)});
    this.modal = !this.modal;
    // window.location.reload();
  }

  onDelete(value:any){
    if (!value) {
      console.log('not found');
      return;
    } //console.log(this.http.findOne(this.projectForm.value.id) )
    this.http.delete(value, 'project').subscribe((res) => {});
    // window.location.reload();

    this.http.findOneActivityProject(value,'activity').subscribe(res=>{

      for(let i=0;i<res.length;i++){
        // console.log(res[i]._id)
        this.http.delete(res[i]._id, 'activity').subscribe((res) => {});
      }
    })
  }
onSelect(d:any){

  this.rese =d.rese
  console.log("first",d)
  this.act=!this.act
}
  syncProjectActivity(){
    this.http.find('project').subscribe((res) => {
      // console.log(res)

      this.data = res;

      this.http.find('activity').subscribe((activity) => {
        for (let i = 0; i < activity.length; i++) {
          // console.log('length data',res[i]._id );
          this.http
            .findOneActivityProject(res[i]?._id, 'activity')
            .subscribe((rese) => {


              Object.assign(res[i], { rese });
              this.data = res;
              // console.log(this.data)

            });
       }
      })
    });

  }
}
