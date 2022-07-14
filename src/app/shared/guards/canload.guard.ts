import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { TimelineApiService } from '../services/timeline-api.service';

@Injectable({
  providedIn: 'root'
})
export class CanloadGuard implements  CanLoad {
  constructor(private auth:TimelineApiService,private router:Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Observable((s)=>{
        s.next(false)
s.complete()
      })
  }
}
