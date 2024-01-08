import { Component } from '@angular/core';
import {GLOBAL} from "../app-config";
import {Member} from "../../Modeles/Member";
import {MemberService} from "../../Services/member.service";


@Component({
  selector: 'app-membre-liste',
  templateUrl: './membre-liste.component.html',
  styleUrls: ['./membre-liste.component.css']
})
export class MembreListeComponent {
  constructor(private MS:MemberService) {}

  onDelete(id:string) : void {
    this.MS.deleteMemberById(id).subscribe(()=>{})
    this.dataSource = this.MS._tab ;
  }
  dataSource: Member[]= GLOBAL.DB.members;

  displayedColumns: string[] = ['id', 'cin', 'nom', 'type','cv','createdDate','Actions'];
}
