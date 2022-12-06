import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {StorageService} from "./storage.service";
import {ILoginModel, IToken} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) {}

  public login(body: ILoginModel, rememberMe: boolean): Observable<{token: string}> {
    return this.httpClient
      .post<IToken>(`${environment.apiUrl}/auth/login`, body)
      .pipe(tap((token) => {
        this.storageService.storageToken(token, rememberMe)
      }))
  }

}
