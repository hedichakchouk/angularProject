import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EventServiceService} from "../../Services/event-service.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  dataSource =  new MatTableDataSource( this.ES.tabEvent);
  displayedColumns: string[] = ['id', 'titre', 'dateDebut', 'dateFin', 'lieu','Actions'];

  constructor(private ES:EventServiceService) {
}
delete(id:string){

}

  openDialog(){

  }
}
