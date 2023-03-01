import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KontaktService} from "../kontakt-app/kontakt.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-kontakt',
  templateUrl: './delete-kontakt.component.html',
  styleUrls: ['./delete-kontakt.component.css']
})
export class DeleteKontaktComponent implements OnInit{

  userId: string = this.route.snapshot.params['Id'];

  @Output() afterDeleteEvent = new EventEmitter();
  @Input() message:any={};
  constructor(private route: ActivatedRoute, private router: Router, private kontaktService: KontaktService) {
  }
  ngOnInit(): void {
  }
  NOAction(){
    this.message = undefined;
  }

  delete(){
    console.log(this.message.id);
    this.kontaktService.deleteKontakte(this.message.id).subscribe(data =>{
    });
    this.message=undefined;
    this.router.navigate(["/kontakt/"+this.userId])
  }

}
