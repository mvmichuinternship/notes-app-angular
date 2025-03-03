import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private notesService:NotesServiceService) {}
  ngOnInit() {
    this.createForm = this.fb.group({
      
      title: '',
      description: '',
      category: '',
      dueDate: '',
      isCompleted: false,
      priority: '',
    });
  }


  onSubmit() {
    console.log(this.createForm.value);
    this.notesService.createNewNote(this.createForm.value)
    // this.postNote.emit(this.createForm);
  }
}
