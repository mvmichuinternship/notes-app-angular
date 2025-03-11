import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotesServiceService } from '../../notes-service.service';

@Component({
  selector: 'app-create-form',
  imports: [ReactiveFormsModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css',
})
export class CreateFormComponent implements OnInit {
  @Output() postNote = new EventEmitter();

  createForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private notesService: NotesServiceService
  ) {}
  ngOnInit() {
    this.createForm = this.fb.group({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      dueDate: new FormControl('',[Validators.required]),
      isCompleted: new FormControl(false,[Validators.required]),
      priority: new FormControl('',[Validators.required]),
    });
  }

  onSubmit() {
    this.notesService.createNewNote(this.createForm.value);
    this.createForm.reset();

    // this.postNote.emit(this.createForm);
  }
}
