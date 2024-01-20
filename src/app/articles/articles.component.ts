import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Member} from "../../Modeles/Member";
import {GLOBAL} from "../app-config";
import {Article} from "../../Modeles/pub";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ArticleFormComponent} from "../article-form/article-form.component";
import {ArticleService} from "../../Services/article.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements AfterViewInit  {
  dataSource =  new MatTableDataSource( this.as.tableArticle);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataRecupere: any;

  displayedColumns: string[] = ['id', 'cin', 'nom', 'type', 'cv', 'createdDate','Actions'];

  constructor(private dialog: MatDialog, private as: ArticleService, private router: Router) {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ArticleFormComponent, {
      height: '80%',
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        // action appler la methode du service d operation curd post *
        this.dataRecupere = data;

         this.as.save(this.dataRecupere).subscribe(() => {
          console.log('composant')

          this.dataSource.data = this.as.tableArticle;
          console.log(this.dataSource)
         //     this.router.navigate(['/articles']);
        })
      })





  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
