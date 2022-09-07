import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  selectedIndex = 1;
  menuItems = [
    {
      id: 0,
      iconPath: '../../assets/recent.svg',
      path: 'recent',
      title: 'Recent',
    },
    {
      id: 1,
      iconPath: '../../assets/favorites.svg',
      path: 'favorites',
      title: 'Favorites',
    },
    {
      id: 2,
      iconPath: '../../assets/nearby.svg',
      path: 'nearby',
      title: 'Nearby',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
