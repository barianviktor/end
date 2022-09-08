import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //user = ''
  user: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {}
  login(value: { username: string; password: string }) {
    //this.user = value.username
    this.user.next(value.username);
  }
}
