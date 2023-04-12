import { Injectable } from '@angular/core';

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

    return localStorage.getItem(this.JWT_TOKEN) as any;

  }

  public clearToken(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
