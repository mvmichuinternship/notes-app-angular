import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotesServiceService } from '../../notes-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-form',
  imports: [ReactiveFormsModule, CommonModule],
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
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', [Validators.required]),
      isCompleted: new FormControl(false, [Validators.required]),
      priority: new FormControl('High', [Validators.required]),
    });
    this.notesService.resetForm$.subscribe(() => {
      this.createForm.reset({
        title: '',
        description: '',
        category: '',
        dueDate: '',
        isCompleted: false,
        priority: 'High',
      });
    });
  }
  get title() {
    return this.createForm.get('title');
  }
  get description() {
    return this.createForm.get('description');
  }
  get category() {
    return this.createForm.get('category');
  }
  get dueDate() {
    return this.createForm.get('dueDate');
  }
  get priority() {
    return this.createForm.get('priority');
  }
  onSubmit() {
    this.notesService.createNewNote(this.createForm.value);
    this.createForm.reset();

    // this.postNote.emit(this.createForm);
  }
}
