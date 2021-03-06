import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineApiService {
  signedIn$= new BehaviorSubject(false)

  constructor(private http:HttpClient) { }


  usernammeAvailable(username: string){
    return this.http.get<{available:boolean}>('http://localhost:3000/api/users/'+
         username
      )
   }


   find(rs:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/'+rs+'/');
  }

  findOne(id:string ,rs:string):Observable<any>{

    return this.http.get<users>('http://localhost:3000/api/'+rs+'/username/'+id );
  }

  findId(id:string ,rs:string):Observable<any>{

    return this.http.get<users>('http://localhost:3000/api/'+rs+'/'+id );
  }

  findOneByPhone(id:string ,rs:string):Observable<any>{

    return this.http.get<users>('http://localhost:3000/api/'+rs+'/phonenumber/'+id );
  }
  findOneByEmail(id:string ,rs:string):Observable<any>{

    return this.http.get<users>('http://localhost:3000/api/'+rs+'/email/'+id );
  }

  findOneActivityProject(id:string ,rs:string):Observable<any>{
    return this.http.get<users>('http://localhost:3000/api/'+rs+'/p/'+id ).pipe(catchError((res)=>res));
  }


  update(_id:string ,details:any, rs:string):Observable<any>{
    console.log(details)
    return  this.http.patch('http://localhost:3000/api/'+rs+'/'+_id,details[0])
   }
  delete(id:string,rs:string):Observable<any>{
    return this.http.delete('http://localhost:3000/api/'+rs+'/'+id);
  }



  checkAuth(){
    return this.http.get<any>('http://localhost:3000/api/users/profile',).pipe(tap((res) =>{
    this.signedIn$.next(res.authenticated)
    console.log(res.authenticated)
    }),catchError(()=>' authentication:false'
    ))
  }



  create(details:any,rs:string):Observable<any>{
    return  this.http.post('http://localhost:3000/api/'+rs,details,).pipe(tap(()=>{

    }))
   }

   register(details:any,rs:string):Observable<any>{
    return  this.http.post('http://localhost:3000/api/'+rs,details,).pipe(tap(()=>{
      this.signedIn$.next(true)
    }))
   }

  signIn(details:any, ):Observable<any>{
    return this.http.post('http://localhost:3000/api/users/login',details).pipe(tap(()=>{
      this.signedIn$.next(true)
    }))
  }


}
interface users{
  address:string
  email: string
  gender: string
  image:string
  password: string
  personnelType: string
  phonenumber: number
  username: string
}
