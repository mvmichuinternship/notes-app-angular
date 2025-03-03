import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { Notes } from '../../interfaces/notes';
import { NotesServiceService } from '../../notes-service.service';

@Component({
  selector: 'app-card',
  imports: [ButtonComponent, NgIf, DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() noteCard!: Notes;

  constructor(private notesService: NotesServiceService) {}
  onCompletedButtonClick(id: number) {
    if (this.noteCard.id == id) {
      this.noteCard.isCompleted = true;
    }
    // this.notesService.changeNoteStatus(id)
  }
  selectEditForm(note: Notes) {
    // console.log('selected');
    this.notesService.setActiveNote(note);
  }
}
