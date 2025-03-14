import { Component, EventEmitter, Output } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-notes-filter-component',
  imports: [MatIconModule],
  templateUrl: './notes-filter-component.component.html',
  styleUrl: './notes-filter-component.component.css'
})
export class NotesFilterComponentComponent {

  // @Output() filter= new EventEmitter()

  constructor(private notesService:NotesServiceService){

  }
  filterFunction(searchText:string){
    this.notesService.filteredNotes(searchText)
  }
}
