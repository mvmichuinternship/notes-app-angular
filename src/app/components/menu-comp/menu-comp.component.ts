import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NotesServiceService } from '../../notes-service.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-comp',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu-comp.component.html',
  styleUrl: './menu-comp.component.css',
})
export class MenuCompComponent {
  priority = true;
  progress = true;
  deadline = true;

  @Output() openMenu = new EventEmitter();

  constructor(private notesService: NotesServiceService) {}

  openSortMenu() {
    this.openMenu.emit();
  }
  sortByPriority() {
    this.priority = !this.priority;
    // console.log(this.priority);
    if (this.priority) {
      this.notesService.sortNotes('priority');
    }
    if (!this.priority) {
      this.notesService.sortNotes('priority_inv');
    }
  }
  sortByDeadline() {
    this.deadline = !this.deadline;
    // console.log(this.deadline);
    if (this.deadline) {
      this.notesService.sortNotes('deadline');
    }
    if (!this.deadline) {
      this.notesService.sortNotes('deadline_inv');
    }
  }
  sortByProgress() {
    this.progress = !this.progress;
    // console.log(this.progress);
    if (this.progress) {
      this.notesService.sortNotes('progress');
    }
    if (!this.progress) {
      this.notesService.sortNotes('progress_inv');
    }
  }
}
