import {Component, NgZone} from '@angular/core';
import {AuthService} from "../../Services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private  AuthS :AuthService , private router:Router ,private ngZone:NgZone ) {
}

  signin() {
  this.AuthS.doGoogleLogin().then(()=> {
    this.succesRedirect();
  })
  }

  succesRedirect(): void {
  this.ngZone.run(()=>{  this.router.navigate(['/members'])
  })

  }

}
