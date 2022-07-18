import { Component, OnInit } from '@angular/core';
import { TimelineApiService } from 'src/app/shared/services/timeline-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data = [] as any;
  rese=[]as any
  projectdata = [] as any[];
  activitydata = [] as any[];
  assigndata = [] as any[];
  test = [] as any[];
  act=false

  constructor(private http: TimelineApiService) {}

  ngOnInit(): void {



    this.syncProjectActivity()

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
