import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-List',
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listData = [];
  @Output() selectedrecipe:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe){
    this.selectedrecipe.emit(recipe);
  }

}
