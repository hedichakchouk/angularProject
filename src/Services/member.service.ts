import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GLOBAL} from "../app/app-config";
import {Member} from "../Modeles/Member";
import {HttpClient} from "@angular/common/http";

// injectble hethi
@Injectable({
  providedIn: 'root'
})

export class MemberService {
  constructor(private httpClient: HttpClient ) {
  }
private _tab:Member[]=GLOBAL.DB.members;
  Save(member:any) : Observable<void> {
    // generer une requtee http en mode poste vers le backend
this._tab.push(member);
return  new Observable<void>(observer=>observer.next())
    //ligne 19,20 pour add avec  l main sans avoir backend
   // return  (this.httpClient.post<void>('http://localhost:8080/api',member)) ;
   }

  get tab(): Member[] {
    return this._tab;
  }
}
