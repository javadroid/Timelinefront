import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineApiService {

  constructor(private http:HttpClient) { }

  create(details:any,rs:string):Observable<any>{
   return  this.http.post('http://localhost:3000/api/'+rs,details)
  }
  update(_id:string ,details:any, rs:string):Observable<any>{
    console.log(details)
    return  this.http.patch('http://localhost:3000/api/'+rs+'/'+_id,details[0])
   }
  findOne(id:string ,rs:string):Observable<any>{

    return this.http.get<users>('http://localhost:3000/api/'+rs+'/'+id);
  }
  find(rs:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/'+rs+'/');
  }
  delete(id:string,rs:string):Observable<any>{
    return this.http.delete('http://localhost:3000/api/'+rs+'/'+id);
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
