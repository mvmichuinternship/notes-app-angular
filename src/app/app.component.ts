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
import { UserLoginComponent } from './user-login/user-login.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './users/user.reducer';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserLoginComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // filtered!: Notes[];
  // isMenuOpened = false;
  // // editNote!:Notes;
  // constructor(private notesService: NotesServiceService) {}
  // ngOnInit(): void {
  //   this.notesService.filtered$.subscribe((filteredData) => {
  //     this.filtered = filteredData;
  //   });
  // }
  // openSortMenu() {
  //   this.isMenuOpened = !this.isMenuOpened;
  // }
  // triggerCreateNewNote() {
  //   this.notesService.setActiveNote(undefined);
  // }
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
