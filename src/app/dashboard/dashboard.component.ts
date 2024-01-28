import { Component } from '@angular/core';
import {MemberService} from "../../Services/member.service";
import {EventServiceService} from "../../Services/event-service.service";
import {ArticleService} from "../../Services/article.service";
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private EA:ArticleService , private ES:EventServiceService,private Ms:MemberService) {
    this.nbMembers = this.Ms._tab.length;
    this.ngEvents = this.ES.tabEvent.length;
    this.nbArticles = this.EA.tableArticle.length ;
    for ( let i=0 ; i<this.nbMembers;i++) {
      this.chartLabels.push(this.Ms._tab[i].nom);
    }
    // this.nbTools = this
  }
  nbMembers : number = 0 ;
  nbArticles : number = 0 ;
  ngEvents : number =0 ;
  nbTools:number=0;
  chartData: any[] = [
    {
      label: '$ in millions',
      data: this.getNumber()  ,

      // ⤵️ Add these
      pointHitRadius: 15, // expands the hover 'detection' area
      pointHoverRadius: 8, // grows the point when hovered
    }
  ];
  chartDataPie: any[] = [
    {
      label: 'teacher student',
      data: this.getStudentTeacher()  ,

      // ⤵️ Add these
      pointHitRadius: 15, // expands the hover 'detection' area
      pointHoverRadius: 8, // grows the point when hovered
    }
  ];
  chartLabels: string[] = [  ];
  chartLabelsPie: string[] =this.getstudien();
  chartOptions: ChartOptions = {};
  chartOptionsPie: ChartOptions = {
    plugins: {
      legend: {
        display: true
      },
    }
  }
  tab_nb :number[]=[];
  stuTech :number[]=[];
  getNumber(): number[] {
    this.Ms.getArticleByMember().subscribe((x) => {
      this.tab_nb = x;
      console.log(this.tab_nb)

    })
    return this.tab_nb
  }

  getStudentTeacher(): number[] {
    this.Ms.getStudentTeacher().subscribe((x) => {
      this.stuTech = x;
      console.log(this.tab_nb)

    })
    return this.tab_nb
  }

  x:string[]=[]
  getstudien():string[]{
    for ( let i=0 ; i<this.nbMembers;i++) {
      this.x.push(this.Ms._tab[i].type);
      console.log(this.Ms._tab[i].type)
    }
    return  this.x
  }

}
