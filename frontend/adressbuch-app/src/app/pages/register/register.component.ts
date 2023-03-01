import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {KontaktService} from "../kontakt-app/kontakt.service";
import {LoginuserService} from "../login/loginuser.service";
import {User} from "../login/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user: User;
  constructor(private route: ActivatedRoute, private router: Router, private userService: LoginuserService) {
  this.user = new User();
  }
    ngOnInit(): void {
      // throw new Error('Method not implemented.');
  }

  postUser(){
    this.userService.addUser(this.user).subscribe()
    alert("register Successfully");
  }

}
