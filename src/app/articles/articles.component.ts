import { Component } from '@angular/core';
import {Member} from "../../Modeles/Member";
import {GLOBAL} from "../app-config";
import {Article} from "../../Modeles/pub";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ArticleFormComponent} from "../article-form/article-form.component";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  dataSource: Article[]= GLOBAL.DB.articles;

  displayedColumns: string[] = ['id', 'cin', 'nom', 'type','cv','createdDate'];
  constructor(private dialog: MatDialog) {}

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ArticleFormComponent, dialogConfig);
  }
}
