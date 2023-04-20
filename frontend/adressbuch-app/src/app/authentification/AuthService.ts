import { Injectable } from '@angular/core';
import { HttpError } from 'http-errors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  public getToken(): string {

      // return JSON.parse(localStorage.getItem(this.JWT_TOKEN)||'{}');

    // if (localStorage.getItem(this.JWT_TOKEN)==null){
    //   throw new HttpError("Unauthorized access. Error 401");
      // window.location.href = '';
    // }

    return localStorage.getItem(this.JWT_TOKEN) as any;

  }

  public clearToken(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
