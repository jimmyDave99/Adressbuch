import {Component} from '@angular/core';
import {KontaktService} from "./kontakt.service";
import {OnInit} from "@angular/core";
import {MatTableDataSource} from "@angular/material/table";
import {KontaktElement} from "./kontaktElement";
import {ActivatedRoute} from "@angular/router";
import {LoginuserService} from "../login/loginuser.service";
import {User} from "../login/user";

@Component({
  selector: 'app-kontakt-app',
  templateUrl: './kontakt-app.component.html',
  styleUrls: ['./kontakt-app.component.css'],
  providers: [KontaktService]
})
export class KontaktAppComponent implements OnInit{
  displayedColumns: string[] = ['nachname', 'vorname', 'anrede', 'telefon',"adresse","aktione"];

  message:any;
  kontakt: KontaktElement[] = [];
  dataSource = new MatTableDataSource<KontaktElement>();
  userId: string = this.route.snapshot.params['Id'];
  user: User;

  constructor( private route: ActivatedRoute, private kontaktService: KontaktService, private loginUserService: LoginuserService) {
    this.user =new User();
  }

  ngOnInit(){
    this.fechtUser();
    this.getData();
  }

  private getData() {
    this.kontaktService.getKontakte().subscribe((datas: KontaktElement[]) => {
      if(this.user.role==="ADMIN"){
        this.kontakt = datas;
      }else {
        this.kontakt = datas.filter((value)=>value.userId===this.userId);
      }
      this.dataSource = new MatTableDataSource(this.kontakt);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(kontaktId:any){
    this.message = {type:'confirm', text:'Möchten Sie diesen Kontakt wirklich löschen?',
      id:kontaktId
    }
  }
  fechtUser(){
    this.loginUserService.getUserById(this.userId).subscribe(data=>{
      this.user = data;
    })
  }

}
