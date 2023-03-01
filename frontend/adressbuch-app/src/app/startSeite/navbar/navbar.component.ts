import {Component, OnInit} from '@angular/core';
import {User} from "../../pages/login/user";
import {LoginuserService} from "../../pages/login/loginuser.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  userId: string = this.route.snapshot.params['Id'];

  constructor(private route: ActivatedRoute, private router: Router ) {

  }

  ngOnInit(): void {
  }

}
