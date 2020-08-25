import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthData } from "./auth-data.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  private user = {
    id: ''
  };
  id = '';

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createAvatar(name: string, model_ids: string) {
    const authData = { name: name, model_ids: model_ids };
    this.http
        .post(`http://localhost:3000/user/${this.id}/new-avatar`, authData)
        .subscribe(response => {
          console.log(response);
        });
  }

  login(login: string, password: string) {
    const authData= {
      login: login,
      password: password
    };
    this.http
        .post<{Token: string, Message: string}>("http://localhost:3000/login",
            authData
        )
        .subscribe(response => {


          this.token = response.Token;
          const helper = new JwtHelperService();
          this.user = helper.decodeToken(this.token);
          this.id = this.user.id;
          console.log(this.id);
          if(this.id.length > 0) {
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
          }
            if(this.isAuthenticated) {
              this.router.navigate(["/listar"]);
            }
        });
  }


  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  private getAuthData() {
    const token = this.token;
    const expirationDate = localStorage.getItem("expiration");
    if (!token) {
      return;
    }
    return {
      token: token
    }
  }
}
