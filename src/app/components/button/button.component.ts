import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnChanges {
  @Input() buttonText?: string;
  @Input() buttonStatus?: boolean;
  @Input() noteId?:number;
  @Output() buttonClick= new EventEmitter
  

  onButtonClick(){
    this.buttonClick.emit(this.noteId)
  }

  ngOnChanges(changes:SimpleChanges){
    this.updateButtonText();
  }

  private updateButtonText(){
    if(this.buttonStatus){
      this.buttonText="Completed"
    }
    else{
      this.buttonText="Mark as Done"
    }
  }
}
