import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../../Services/member.service";

@Component({
  selector: 'app-membre-form',
  templateUrl: './membre-form.component.html',
  styleUrls: ['./membre-form.component.css']
})
export class MembreFormComponent implements  OnInit {
  constructor(private MS:MemberService) {
    // hethi l etape titsama injection du dependance
  }

form!:FormGroup;
ngOnInit() {
  this.intiForm()

}

    intiForm() {
    this.form = new FormGroup({
      cin : new FormControl(null, Validators.required) ,
      name : new FormControl(null,[]) ,
      cv : new FormControl(null,[]) ,
      type : new FormControl(null,[]) ,
    })
  }


  showVariabls() {
  console.log(this.form.value);
  const memberToSave = this.form.value ;
  this.MS.Save(memberToSave).subscribe(()=>{}) ;
  // mil front abina il html  w abineha fil variable this.value.form abineha b les donnes , baaad sna3na service ili bech ykharj la requte http
  }
}
