import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { TimelineApiService } from 'src/app/shared/services/timeline-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly TOKEN_NAME = 'profanis_auth';

  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',(Validators.required)),
  })

  onSubmit(){
    if(!this.loginForm.value.password ||!this.loginForm.value.username){
      return
    }



   return this.http.signIn(this.loginForm.value).subscribe((res)=>{
    console.log(res)
    localStorage.setItem(this.TOKEN_NAME, res.token);
    this.router.navigate(['.user/dashboard'])

   })
    }

    get token(): any {
      return localStorage.getItem(this.TOKEN_NAME);
    }
  rest(){

  }
  constructor(private http: TimelineApiService,private router:Router) { }

  ngOnInit(): void {



  }

}
