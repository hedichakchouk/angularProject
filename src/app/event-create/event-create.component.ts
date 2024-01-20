import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {EventServiceService} from "../../Services/event-service.service";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {

  range = new FormGroup({

    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

constructor(private EV:EventServiceService,private router:Router) {
}


  showVariabls() {
    // console.log(this.range.value);
    // const eventToSave = this.range.value ;
    // id:Math.ceil((Math.random()*1000)).toString();
    //
    // this.EV.Save(eventToSave).subscribe(()=>{
    //   this.router.navigate(['/events'])
    // }) ;
    // mil front abina il html  w abineha fil variable this.value.form abineha b les donnes , baaad sna3na service ili bech ykharj la requte http
  }
}
