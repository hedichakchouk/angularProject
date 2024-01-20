import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Article} from "../../Modeles/pub";
import {Member} from "../../Modeles/Member";

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements  OnInit{
  form!: FormGroup;
  articleGlobal!:Article;
   constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ArticleFormComponent>) {}


  ngOnInit() {
    this.intiForm();
  }


  intiForm1(a:Article){
    this.form = new FormGroup({
      cin : new FormControl(a.id, Validators.required) ,
      name : new FormControl(a.type,[]) ,
      cv : new FormControl(a.titre,[]) ,
      type : new FormControl(a.lien,[]) ,
      date : new FormControl(a.date,[]) ,
      sourcePdf : new FormControl(a.sourcePdf,[]) ,
    })
  }

  intiForm(){
    this.form = new FormGroup({
      id : new FormControl(null, Validators.required) ,
      type : new FormControl(null,[]) ,
      titre : new FormControl(null,[]) ,
      lien : new FormControl(null,[]) ,
      date : new FormControl(null,[]) ,
      sourcePdf : new FormControl(null,[]) ,
    })
  }

  save() {
     console.log(this.form.value);
     // recuperer form .value
    // lancer le methode fi service
    // envoyer une requette hhtttp en mode post vers le back
    // namlo redurection vers le page article
    this.dialogRef.close(this.form.value);

  }

  close() {
    this.dialogRef.close();
  }
}
