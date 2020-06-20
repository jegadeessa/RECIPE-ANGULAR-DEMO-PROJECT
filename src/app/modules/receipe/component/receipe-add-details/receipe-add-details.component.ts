import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-receipe-add-details',
  templateUrl: './receipe-add-details.component.html',
  styleUrls: [
    './receipe-add-details.component.scss',
    '../../../../app.component.scss',
  ],
})
export class ReceipeAddDetailsComponent implements OnInit {
  addRecipe: any;
  @Output() addedRecipe: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addRecipe = this.fb.group({
      name: ['', Validators.required],
      recipeSource: ['', Validators.required],
      recipeImage: ['', Validators.required],
      Ingradients: ['', Validators.required],
    });
  }

  addHandler() {
    let addedRecipe = {
      id: Math.random() * 1000,
      name: this.addRecipe.value.name,
      recipeImage: this.addRecipe.value.recipeImage,
      Ingradients: this.addRecipe.value.Ingradients.split(','),
    };
    this.addedRecipe.emit(addedRecipe);
  }
}
