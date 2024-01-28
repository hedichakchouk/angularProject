import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GLOBAL} from "../app/app-config";
import {Member} from "../Modeles/Member";
import {HttpClient} from "@angular/common/http";

// injectble hethi
@Injectable({
  providedIn: 'root'
})

export class MemberService {
  constructor(private httpClient: HttpClient) {
  }

  _tab: Member[] = GLOBAL.DB.members;

  Save(member: any): Observable<void> {
    // generer une requtee http en mode poste vers le backend
    this._tab.push(member);
    return new Observable<void>(observer => observer.next())
    //ligne 19,20 pour add avec  l main sans avoir backend
    // return  (this.httpClient.post<void>('http://localhost:8080/api',member)) ;
  }

  getMemberById(id: string): Observable<Member> {
    console.log(id);
    console.log(this._tab.filter(item => item.id == "123"));
    //this._tab.filter(item=> item.id == id ) [0]?? null ;  // ?? hethi fil ts manetha si sinon
    return new Observable(observer => observer.next(this._tab.filter(item => item.id == id) [0] ?? null))
    // this.httpClient.get<Member> ('http://localhost:8080/api/Members/id') ;  : hethi partie backend juste ken ana backend naamlo requet get njibo bih
  }

  deleteMemberById(id: String): Observable<void> {
    this._tab = this._tab.filter(item => item.id != id);
    return new Observable(observer => observer.next());
    // return this.httpClient.delete<void>('http://localhost:8080/api/members/$id') ;
  }

  nbPub: number[] = [];

  getArticleByMember(): Observable<number[]> {
    //getALl => tab
    this.nbPub=[]
    for (let i = 0; i < this._tab.length; i++)
       this.nbPub.push( this._tab[i].tab_pub.length)
    console.log( this.nbPub)
    return new Observable(observer => observer.next( this.nbPub));

  }
  student: number[] = [];
   count!:number  ;
   count2!:number  ;


  getStudentTeacher(): Observable<number[]> {
    //getALl => tab
    this.student=[]
     for (let i = 0; i < this._tab.length; i++)
    {
      if(this._tab[i].type=="student")
      {
        this.count++ ;
        this.student.push( this.count)

      } else       if(this._tab[i].type=="teacher") {
        this.count2++ ;
        this.student.push( this.count2)

      }
    }
     console.log( this.student)
    return new Observable(observer => observer.next( this.student));

  }

}
