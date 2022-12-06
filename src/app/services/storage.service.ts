import { Injectable } from '@angular/core';
import {IToken} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public storageToken(token: IToken, rememberMe: boolean): void {
    if (rememberMe) {
      localStorage.setItem('token', token.token);
    } else {
      sessionStorage.setItem('token', token.token)
    }
  }

  public getToken():string {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return token!;
  }

  public removeToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }

}
