import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../components/header/header.component';
import { MenuCompComponent } from '../components/menu-comp/menu-comp.component';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { NotesComponentComponent } from '../notes-component/notes-component.component';
import { NotesFilterComponentComponent } from '../notes-filter-component/notes-filter-component.component';
import { Notes } from '../interfaces/notes';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    NotesComponentComponent,
    NotesFilterComponentComponent,
    HeaderComponent,
    CreateNoteComponent,
    MatIconModule,
    MenuCompComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  filtered!: Notes[];
  isMenuOpened = false;
  // editNote!:Notes;
  constructor(private notesService: NotesServiceService) {}

  ngOnInit(): void {
    this.notesService.filtered$.subscribe((filteredData) => {
      this.filtered = filteredData;
    });
    this.notesService.setActiveNote(undefined);
  }
  openSortMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  triggerCreateNewNote() {
    this.notesService.setActiveNote(undefined);
  }
}
