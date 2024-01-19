import { Injectable } from '@angular/core';
import {Article} from "../Modeles/pub";
import {GLOBAL} from "../app/app-config";

@Injectable({
  //@injectable tkhali service availbe bech naamlo menoo injection de dep
  providedIn: 'root'
})
export class ArticleService {
tableArticle:Article[]= GLOBAL.DB.articles ;
constructor() { }
}
