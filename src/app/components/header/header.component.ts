import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title: string = 'title';
  @Input() iconPath: string = '../../assets/person.svg';
  usernameSubscription: Subscription;
  currentUser = '';
  constructor(private userService: UserService) {
    this.usernameSubscription = this.userService.user.subscribe((x) => {
      console.log(x);
      this.currentUser = x;
    });
  }

  ngOnInit(): void {}

  onProfileClick() {
    console.log(this.currentUser);

    alert(this.currentUser);
  }
  ngOnDestroy() {
    this.usernameSubscription.unsubscribe();
  }
}
