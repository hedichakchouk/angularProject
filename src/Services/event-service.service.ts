import { Injectable } from '@angular/core';
import {GLOBAL} from "../app/app-config";
import {Evenement} from "../Modeles/Evenement";
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
 tabEvent :Evenement[]=GLOBAL.DB.events ;

  constructor( private httpClient: HttpClient) {  }

  Save(){

  }
}
