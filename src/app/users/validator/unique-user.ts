
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { TimelineApiService } from "src/app/shared/timeline-api.service";


@Injectable({providedIn:'root'})
export class UniqueUser implements AsyncValidator {

  constructor(private authService: TimelineApiService){}

  validate=(control: AbstractControl)=>{
    const {value}=control
    return this.authService.findOne(value,'users')

    .pipe(map((res)=>{

      if(res?.length>0){
        console.log(res[0].username)
        if(res[0].username){

          return {UniqueUsername:true}
        } else  return {badInternetConnect:true};
      }
          return null


    }
    ))
  }

  validateEmail=(control: AbstractControl)=>{
    const {value}=control
    return this.authService.findOneByEmail(value,'users')

    .pipe(map((res)=>{

      if(res?.length>0){
        console.log(res[0].email)
        if(res[0].email){

          return {UniqueUsername:true}
        } else  return {badInternetConnect:true};
      }
          return null


    }
    ))
  }

  validatePhone=(control: AbstractControl)=>{
    const {value}=control
    return this.authService.findOneByPhone(value,'users')

    .pipe(map((res)=>{

      if(res?.length>0){
        console.log(res[0].phonenumber)
        if(res[0].phonenumber){

          return {UniqueUsername:true}
        } else  return {badInternetConnect:true};
      }
          return null


    }
    ))
  }

}
