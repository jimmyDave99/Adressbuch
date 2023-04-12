import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {AuthService} from "../../authentification/AuthService";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  readonly API_URL = "http://localhost:8080/user"

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  loginUser(user: User): Observable<any> {
    return this.httpClient.post(this.API_URL + "/login", user);
  }

  getUserById(userId: String): Observable<any> {
    return this.httpClient.get(this.API_URL + "/" + userId)
  }

  getUsers() {
    return this.httpClient.get<User>(this.API_URL)
  }

  public getUserName() {
    const token = this.authService.getToken();
    const decodedToken = jwt_decode(token) as any;
    console.log(decodedToken)
    return decodedToken.sub;
  }

  public getUserRole() {
    const token = this.authService.getToken();
    const decodedToken = jwt_decode(token) as any;
    console.log(decodedToken)
    return decodedToken.role;
  }

  addUser(user: User) {
    return this.httpClient.post<User>(this.API_URL + "/register", user)
  }

  deleteUser(id: String) {
    return this.httpClient.delete<User>(this.API_URL + "/" + id)
  }

}
