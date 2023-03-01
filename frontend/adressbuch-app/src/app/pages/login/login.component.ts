import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {LoginuserService} from "./loginuser.service";
import {ActivatedRoute, Router} from "@angular/router";
import {KontaktElement} from "../kontakt-app/kontaktElement";
import {MatTableDataSource} from "@angular/material/table";
import {KontaktService} from "../kontakt-app/kontakt.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  kontakt: KontaktElement;
  user:User = new User();
  constructor(private route: ActivatedRoute, private loginservice: LoginuserService, private router: Router, private kontaktService:KontaktService) {
    this.kontakt = new KontaktElement();
  }

  ngOnInit(): void {
  }

  userLogin(){
   console.log(this.user);
  this.loginservice.loginUser(this.user).subscribe(data=>{
    // alert("Login Successfully")
    this.gotoKontakte();
  },error => alert("Bitte geben Sie richtige Benutzername oder Passwort  "));
  // })
  }

  gotoKontakte(){
    this.router.navigate(["kontakt/" + this.user.userId]);

  }

}
