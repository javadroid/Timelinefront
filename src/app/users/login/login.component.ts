import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { TimelineApiService } from 'src/app/shared/timeline-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',(Validators.required)),
  })

  onSubmit(){
    if(!this.loginForm.value.password ||!this.loginForm.value.username){
      return
    }
    console.log(this.loginForm.value)
   return this.http.signIn(this.loginForm.value).subscribe((res)=>{
    console.log(res)
   })
    }
  rest(){

  }
  constructor(private http: TimelineApiService) { }

  ngOnInit(): void {
    this.http.checkAuth().subscribe(()=>{})
  }

}
