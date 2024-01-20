import { Component } from '@angular/core';
import {AuthService} from "../../Services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
User!:any ;
  constructor(private authService:AuthService,private router:Router ) {
    // etape d"extratction de user name et circle account
    this.authService.getUserClaims().then((user)=>{this.User = user })
    // ligne 14 abbi l user
  }

  logout(){
    this.authService.doLogout().then(()=>{
      this.router.navigate([''])
    })
  }

}
