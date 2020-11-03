import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token: string;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.idToken.subscribe(token => { this.token = token });
  }

  public getToken() {
    return this.token;
  }

}
