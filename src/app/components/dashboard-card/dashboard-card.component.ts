import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-dashboard-card]',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  constructor() {}
  @Input() width = '100%';
  @Input() item!: {
    id: number;
    title: string;
    imgPath: string;
    date: string;
  };
  @Output() imageClick = new EventEmitter<string>();
  @Output() bookClick = new EventEmitter<number>();
  ngOnInit(): void {}
  onImageClick() {
    this.imageClick.emit(this.item.title);
  }
  onBookClick() {
    this.bookClick.emit(this.item.id);
  }
}
