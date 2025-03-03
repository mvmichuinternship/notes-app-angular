import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CreateFormComponent } from './create-form/create-form.component';
import { NotesServiceService } from '../notes-service.service';
import { Notes } from '../interfaces/notes';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-note',
  imports: [CreateFormComponent, EditFormComponent, NgIf],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css',
})
export class CreateNoteComponent implements OnInit {
  editNote!: Notes;
  constructor(private notesService: NotesServiceService) {}
  ngOnInit(): void {
    this.notesService.activeNote$.subscribe((activeNote) => {
      this.editNote = activeNote;
    });
  }
}
