import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimelineApiService } from './shared/timeline-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timeline';
  signedIn$: BehaviorSubject<boolean>;

  constructor(private auth:TimelineApiService){
    this.signedIn$=this.auth.signedIn$
  }

  ngOnInit(): void {
   this.auth.checkAuth().subscribe(()=>{})
  }
}
