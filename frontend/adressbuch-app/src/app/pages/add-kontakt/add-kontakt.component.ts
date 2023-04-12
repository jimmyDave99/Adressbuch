import {Component, OnInit} from '@angular/core';
import {KontaktElement} from "../kontakt-app/kontaktElement";
import {ActivatedRoute, Router} from "@angular/router";
import {KontaktService} from "../kontakt-app/kontakt.service";
import {LoginuserService} from "../login/loginuser.service";

@Component({
  selector: 'app-add-kontakt',
  templateUrl: './add-kontakt.component.html',
  styleUrls: ['./add-kontakt.component.css']
})
export class AddKontaktComponent implements OnInit{
  kontakt: KontaktElement;
  kontaktId: number = 0;
  userId: string="";

  constructor(private route: ActivatedRoute, private router: Router, private kontaktservice: KontaktService, private loginUserService: LoginuserService) {

    this.kontakt = new KontaktElement();
    this.userId = loginUserService.getUserName();
  }

  ngOnInit(): void {
    this.kontaktId = +parseInt(this.route.snapshot.params['IdKontakt']);
    this.schowUpdateKontakt();
    this.kontakt.userId=this.userId;
  }

  postKontakt(){
    this.kontaktservice.addKontakte(this.kontakt).subscribe(data => {
      this.gotoKontakte()
    });

  }

  gotoKontakte(){
    this.router.navigate(["kontakt/"]);
  }

  schowUpdateKontakt(){
    this.kontaktservice.getKontaktById(this.kontaktId).subscribe(data=>{
      this.kontakt = data;
    })
  }

}
