import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TimelineApiService } from './shared/services/timeline-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timeline';
  signedIn$: BehaviorSubject<boolean>;
  private readonly TOKEN_NAME = 'profanis_auth';
  constructor(private router:Router,private auth:TimelineApiService) {
    this.signedIn$=this.auth.signedIn$
  }

  logout(){
    localStorage.removeItem(this.TOKEN_NAME);
    //window.location.reload()
    this.signedIn$=new BehaviorSubject(false)

  }

  ngOnInit(): void {
   this.auth.checkAuth().subscribe(()=>{})


  }
}
