import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() listData: any;
  @Input() isCart = false;
  @Output() selectedrecipe:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe){
    this.selectedrecipe.emit(recipe);
  }

}
