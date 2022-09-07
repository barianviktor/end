import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-dashboard-galery',
  templateUrl: './dashboard-galery.component.html',
  styleUrls: ['./dashboard-galery.component.scss'],
})
export class DashboardGaleryComponent implements OnInit {
  @Input() images!: string[];
  selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {}
  setIndex(index: number) {
    this.selectedIndex = index;
  }
}
