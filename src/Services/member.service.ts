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
tab:Member[]=GLOBAL.DB.members;
  Save(member:any) : Observable<void> {
    // generer une requtee http en mode poste vers le backend

    return  (this.httpClient.post<void>('http://localhost:8080/api',member)) ;
   }
}
