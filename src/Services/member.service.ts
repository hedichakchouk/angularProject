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

  getMemberById(id:string ):Observable<Member> {

   //this._tab.filter(item=> item.id == id ) [0]?? null ;  // ?? hethi fil ts manetha si sinon
    return new Observable(observer => observer.next(this._tab.filter(item=> item.id == id ) [0]?? null ))
     // this.httpClient.get<Member> ('http://localhost:8080/api/Members/id') ;  : hethi partie backend juste ken ana backend naamlo requet get njibo bih
  }
}
