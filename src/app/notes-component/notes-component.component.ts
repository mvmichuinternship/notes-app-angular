import { Component, Input } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { NgFor, NgIf } from '@angular/common';
import { Notes } from '../interfaces/notes';

@Component({
  selector: 'app-notes-component',
  imports: [CardComponent, NgFor,NgIf],
  templateUrl: './notes-component.component.html',
  styleUrl: './notes-component.component.css',
})
export class NotesComponentComponent {
  @Input({ required: true }) notes!: Notes[];
}
