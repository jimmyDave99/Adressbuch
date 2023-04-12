import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {LoginuserService} from "./loginuser.service";
import {ActivatedRoute, Router} from "@angular/router";
import {KontaktElement} from "../kontakt-app/kontaktElement";
import {MatTableDataSource} from "@angular/material/table";
import {KontaktService} from "../kontakt-app/kontakt.service";
import {AuthService} from "../../authentification/AuthService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  kontakt: KontaktElement;
  user:User = new User();
  username: any;
  constructor(private route: ActivatedRoute, private loginservice: LoginuserService, private router: Router,
              private kontaktService:KontaktService,private authService: AuthService) {
    this.kontakt = new KontaktElement();
  }

  ngOnInit(): void {
  }

  userLogin(){
  this.loginservice.loginUser(this.user).subscribe(data=>{
    const token = data['token'];
    // Save the JWT token in the local storage
    this.authService.setToken(token);

    this.gotoKontakte();
  },error => alert("Bitte geben Sie richtige Benutzername oder Passwort  "));
  }

  gotoKontakte(){
    this.router.navigate(["kontakt/"]);

  }

}
