import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-membre-form',
  templateUrl: './membre-form.component.html',
  styleUrls: ['./membre-form.component.css']
})
export class MembreFormComponent implements  OnInit {
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
  }
}
