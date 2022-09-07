import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {}
  login(value: { username: string; password: string }) {
    console.log(value);
    this.user.next(value.username);
  }
}
