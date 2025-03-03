import { Injectable } from '@angular/core';
import { Notes } from './interfaces/notes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesServiceService {
  // public activeNote?:Notes;
  private filteredSource = new BehaviorSubject<any[]>([]);
  private activeNoteSubject = new BehaviorSubject<any>({});
  activeNote$ = this.activeNoteSubject.asObservable();
  filtered$ = this.filteredSource.asObservable();

  notes = [
    {
      id: 1,
      title: 'Notes title',
      description:
        "Now that the container of the card has been established, we can fill it out with some content. The example I've created uses an icon on the left, and the card information on the right.",
      dueDate: '2025-03-31',
      isCompleted: true,
      priority: 'High',
      category: 'Work',
    },
    {
      id: 2,
      title: 'Project planning',
      description:
        'Create timeline and resource allocation for Q2 marketing campaign. Need to coordinate with design team on visual assets and messaging consistency.',
      dueDate: '2025-04-15',
      isCompleted: false,
      priority: 'Medium',
      category: 'Work',
    },
    {
      id: 3,
      title: 'Grocery list',
      description:
        'Pick up eggs, milk, bread, and vegetables. Also check if there are any good deals on fruit this week. Remember to bring reusable bags.',
      dueDate: '2025-03-03',
      isCompleted: true,
      priority: 'Low',
      category: 'Personal',
    },
    {
      id: 4,
      title: 'Exercise routine',
      description:
        'Monday: cardio, Tuesday: upper body, Wednesday: rest, Thursday: lower body, Friday: full body, Weekend: outdoor activity or rest.',
      dueDate: '2025-03-10',
      isCompleted: false,
      priority: 'Medium',
      category: 'Health',
    },
    {
      id: 5,
      title: 'Birthday gift ideas',
      description:
        "Mom's birthday coming up. Consider book subscription, pottery class, or that scarf she mentioned. Budget around $50-75. Need to order at least a week in advance.",
      dueDate: '2025-03-22',
      isCompleted: false,
      priority: 'High',
      category: 'Personal',
    },
    {
      id: 6,
      title: 'Learning goals',
      description:
        'Complete Angular course by end of month. Practice building at least two small projects. Focus on mastering component communication and state management.',
      dueDate: '2025-03-30',
      isCompleted: false,
      priority: 'High',
      category: 'Education',
    },
  ];

  constructor() {
    this.filteredSource.next(this.notes);
    this.activeNoteSubject.next(undefined);
  }
  createNewNote(newNote: Notes) {
    this.filteredSource.next(
      (this.notes = [
        ...this.notes,
        { ...newNote, id: this.notes[this.notes.length - 1].id + 1 },
      ])
    );
  }
  editNote(newNote: Notes) {
    const toBeEdited = this.notes.findIndex((note) => note.id === newNote.id);
    console.log(newNote);
    this.notes[toBeEdited] = newNote;
    this.filteredSource.next((this.notes = [...this.notes]));
    console.log(this.notes);
  }

  setActiveNote(note: Notes) {
    this.activeNoteSubject.next(note);
  }
  // changeNoteStatus(id: number) {
  //   console.log(this.notes);
  // }

  filteredNotes(searchText: string) {
    if (!searchText) {
      this.filteredSource.next(this.notes);
    }
    this.filteredSource.next(
      this.notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchText.toLowerCase()) ||
          note.category.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }
}
