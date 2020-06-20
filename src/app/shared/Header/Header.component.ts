import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReceipeAddDetailsComponent } from 'src/app/modules/receipe/component/receipe-add-details/receipe-add-details.component';
import { AddRecipeDetailsTemplateDrivenComponent } from 'src/app/modules/receipe/component/add-recipe-details-template-driven/add-recipe-details-template-driven.component';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss', '../../app.component.scss'],
})
export class HeaderComponent implements OnInit {
  viewIcon = '../../../assets/apps-24px.svg';
  addOption = false;
  @Output() selectedView: EventEmitter<boolean> = new EventEmitter();
  @Output() addedRecipe: EventEmitter<any> = new EventEmitter();
  @Input() userOpt: string;
  @Input() nullHeader = false;

  constructor(private router: Router,private modalService: NgbModal) {}

  ngOnInit(): void {
    if(this.userOpt === 'shop'){
      this.addOption = true;
    }
    else{
      this.addOption = false;
    }
  }

  viewHandler() {
    if (this.viewIcon === '../../../assets/apps-24px.svg') {
      this.viewIcon = '../../../assets/menu-24px.svg';
      this.selectedView.emit(true);
    } else {
      this.viewIcon = '../../../assets/apps-24px.svg';
      this.selectedView.emit(false);
    }
  }

  redirect() {
    if (this.userOpt === 'shop') {
      this.router.navigate(['shop']);
    } else {
      this.router.navigate(['receipe']);
    }
  }

  open() {
    const modalRef = this.modalService.open(ReceipeAddDetailsComponent);
    // const modalRef = this.modalService.open(AddRecipeDetailsTemplateDrivenComponent);
    modalRef.componentInstance.addedRecipe.subscribe((data => {
      if(data){
        this.addedRecipe.emit(data);
        modalRef.close();
      }
    })); 
  }
}
