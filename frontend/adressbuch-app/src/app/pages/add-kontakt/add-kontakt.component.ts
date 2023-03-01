import {Component, OnInit} from '@angular/core';
import {KontaktElement} from "../kontakt-app/kontaktElement";
import {ActivatedRoute, Router} from "@angular/router";
import {KontaktService} from "../kontakt-app/kontakt.service";

@Component({
  selector: 'app-add-kontakt',
  templateUrl: './add-kontakt.component.html',
  styleUrls: ['./add-kontakt.component.css']
})
export class AddKontaktComponent implements OnInit{
  kontakt: KontaktElement;
  kontaktId: number = 0;
  userId: string = this.route.snapshot.params['Id'];

  constructor(private route: ActivatedRoute, private router: Router, private kontaktservice: KontaktService) {

    this.kontakt = new KontaktElement();
  }

  ngOnInit(): void {
    this.kontaktId = +parseInt(this.route.snapshot.params['IdKontakt']);
    this.schowUpdateKontakt();
    this.kontakt.userId=this.userId;
    console.log(this.userId);
  }

  postKontakt(){
    this.kontaktservice.addKontakte(this.kontakt).subscribe(data => {
      this.gotoKontakte()
    });

  }

  gotoKontakte(){
    this.router.navigate(["kontakt/"+ this.userId]);
    console.log(this.userId+"oogfhdhh");
    console.log(this.kontakt);
    // console.log(data.userId);
  }

  schowUpdateKontakt(){
    this.kontaktservice.getKontaktById(this.kontaktId).subscribe(data=>{
      this.kontakt = data;
    })
  }

}
