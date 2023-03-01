import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KontaktElement} from "./kontaktElement";
@Injectable({
  providedIn: 'root'
})
export class KontaktService {

  readonly API_URL = "http://localhost:8080/api"
  readonly ENDPOINT_Kontakt = "/kontakte"
  constructor(private httpClient: HttpClient) { }

  getKontakte() {
    return this.httpClient.get<KontaktElement[]>(this.API_URL+this.ENDPOINT_Kontakt)
  }
  getKontaktById(kontaktID: number) {
    return this.httpClient.get<KontaktElement>(this.API_URL+this.ENDPOINT_Kontakt+"/"+kontaktID)
  }
  addKontakte(kontakt: KontaktElement) {
    return this.httpClient.post<KontaktElement>(this.API_URL+this.ENDPOINT_Kontakt,kontakt)
  }
  deleteKontakte(id: number){
    return this.httpClient.delete<KontaktElement>(this.API_URL+this.ENDPOINT_Kontakt+"/"+id)
  }
}
