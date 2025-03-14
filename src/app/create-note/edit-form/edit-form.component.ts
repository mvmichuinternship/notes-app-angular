import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NotesServiceService } from '../../notes-service.service';
import { Notes } from '../../interfaces/notes';

@Component({
  selector: 'app-edit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent implements OnInit {
  editForm!: FormGroup;

  // @Input() activeNoteData!:Notes
  constructor(
    private fb: FormBuilder,
    private notesService: NotesServiceService
  ) {}
  ngOnInit() {
    // console.log(this.activeNoteData)
    this.notesService.activeNote$.subscribe((activeNote) => {
      console.log(activeNote);
      if (!activeNote) return;
      this.editForm = this.fb.group({
        id: activeNote.id,
        title: activeNote.title,
        description: activeNote.description,
        category: activeNote.category,
        dueDate: activeNote.dueDate,
        isCompleted: Boolean(activeNote.isCompleted),
        priority: activeNote.priority,
      });
    });
  }

  get isCompleted(): boolean {
    return this.editForm.get('isCompleted')?.value === true;
  }
  editNoteMethod() {
    this.notesService.editNote(this.editForm.value);
    this.editForm.reset();
  }
}
