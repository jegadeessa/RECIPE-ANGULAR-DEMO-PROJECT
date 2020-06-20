import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receipe-selected-details',
  templateUrl: './receipe-selected-details.component.html',
  styleUrls: ['./receipe-selected-details.component.scss','../../../../app.component.scss']
})
export class ReceipeSelectedDetailsComponent implements OnInit {
  @Input() selectedRecipe:any;
  @Output() userChoice:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editOption(event: any){
    this.userChoice.emit(event);
  }

}
