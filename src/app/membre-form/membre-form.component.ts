import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../../Services/member.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-membre-form',
  templateUrl: './membre-form.component.html',
  styleUrls: ['./membre-form.component.css']
})
export class MembreFormComponent implements  OnInit {
  constructor(private MS:MemberService,private router:Router  ,private activatedRoute:ActivatedRoute) {
    // hethi l etape titsama injection du dependance

  }

form!:FormGroup;
ngOnInit() {
  // 1 Recuperer de id  de la route
  const idcourant = this.activatedRoute.snapshot.params['id'];
  console.log(idcourant);
  // si  id exeiste  => edit
 // {
    //getMemeberByid(id)
    //initiliser le form
  //}
 // sinon  je suuis  dans create  => appel a init form()
  this.intiForm() ; //creer une inst de form et initialiser

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
  id:Math.ceil((Math.random()*1000)).toString();

   this.MS.Save(memberToSave).subscribe(()=>{
    this.router.navigate(['/members'])
  }) ;
  // mil front abina il html  w abineha fil variable this.value.form abineha b les donnes , baaad sna3na service ili bech ykharj la requte http
  }
}
