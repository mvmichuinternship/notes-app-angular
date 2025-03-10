import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesComponentComponent } from './notes-component/notes-component.component';
import { NotesFilterComponentComponent } from './notes-filter-component/notes-filter-component.component';
import { Notes } from './interfaces/notes';
import { HeaderComponent } from './components/header/header.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesServiceService } from './notes-service.service';
import { MatIconModule } from '@angular/material/icon';
import { MenuCompComponent } from './components/menu-comp/menu-comp.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NotesComponentComponent,
    NotesFilterComponentComponent,
    HeaderComponent,
    CreateNoteComponent,
    MatIconModule,
    MenuCompComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  filtered!: Notes[];
  isMenuOpened = false;
  // editNote!:Notes;
  constructor(private notesService: NotesServiceService) {}

  ngOnInit(): void {
    this.notesService.filtered$.subscribe((filteredData) => {
      this.filtered = filteredData;
    });
  }
  openSortMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  triggerCreateNewNote() {
    this.notesService.setActiveNote(undefined);
  }
  // constructor() {
  //   this.filtered = this.notes;
  // }
  // filteredNotes(searchText: string) {
  //   if (!searchText) {
  //     this.filtered = this.notes;
  //   }
  //   this.filtered = this.notes.filter(
  //     (note) =>
  //       note.title.toLowerCase().includes(searchText.toLowerCase()) ||
  //       note.category.toLowerCase().includes(searchText.toLowerCase())
  //   );
  // }
}
