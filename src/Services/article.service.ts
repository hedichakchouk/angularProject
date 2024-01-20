import {Injectable} from '@angular/core';
import {Article} from "../Modeles/pub";
import {GLOBAL} from "../app/app-config";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  //@injectable tkhali service availbe bech naamlo menoo injection de dep
  providedIn: 'root'
})
export class ArticleService {
  tableArticle: Article[] = GLOBAL.DB.articles;

  constructor(private httpClient: HttpClient) {
  }

  save(dataRecupere: any): Observable<void> {

  //  return this.httpClient.post<void>('http://localhost:8080/articles', dataRecupere)
  // si on backend
this.tableArticle.push(dataRecupere) ;
    console.log(this.tableArticle)

return  new Observable(observer=> observer.next())
  }

}
