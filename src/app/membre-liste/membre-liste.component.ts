import { Component } from '@angular/core';
import {GLOBAL} from "../app-config";
import {Member} from "../../Modeles/Member";

@Component({
  selector: 'app-membre-liste',
  templateUrl: './membre-liste.component.html',
  styleUrls: ['./membre-liste.component.css']
})
export class MembreListeComponent {
  dataSource: Member[]= GLOBAL.DB.members;

  displayedColumns: string[] = ['id', 'cin', 'nom', 'type','cv','createdDate','Actions'];
}
