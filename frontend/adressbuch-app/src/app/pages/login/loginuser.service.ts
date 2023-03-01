import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {KontaktElement} from "../kontakt-app/kontaktElement";

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  readonly API_URL = "http://localhost:8080/user"
  constructor(private httpClient: HttpClient) { }

  loginUser(user:User):Observable<object>{
    return this.httpClient.post(this.API_URL+"/login",user);
  }
  getUserById(userId: String):Observable<any> {
    return this.httpClient.get(this.API_URL+"/"+userId)
  }
  getUsers() {
    return this.httpClient.get<User>(this.API_URL)
  }
  addUser(user: User) {
    return this.httpClient.post<User>(this.API_URL+"/register",user)
  }
  deleteUser(id: String){
    return this.httpClient.delete<User>(this.API_URL+"/"+id)
  }

}
