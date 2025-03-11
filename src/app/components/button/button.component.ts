import { NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnChanges {
  buttonText?: string;
  @Input() buttonStatus?: boolean;
  @Input() noteId?: number;
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit(this.noteId);
  }
  // constructor(private cdr: ChangeDetectorRef){}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['buttonStatus'] && !changes['buttonText']) {
      this.updateButtonText();
    }
  }

  private updateButtonText() {
    
    if (this.buttonStatus) {
      this.buttonText = 'Completed';
      console.log(this.buttonStatus);
    } else {
      this.buttonText = 'Mark as Done';
    }
    // this.cdr.detectChanges();
  }
}
