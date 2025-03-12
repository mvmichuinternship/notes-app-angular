import { Injectable, OnInit } from '@angular/core';
import { Notes } from './interfaces/notes';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from './interfaces/user';
import { AppState } from './app.state';
import { selectLoginUser } from './users/user.selector';

@Injectable({
  providedIn: 'root',
})
export class NotesServiceService {
  // public activeNote?:Notes;
  private filteredSource = new BehaviorSubject<any[]>([]);
  private activeNoteSubject = new BehaviorSubject<any>({});
  activeNote$ = this.activeNoteSubject.asObservable();
  filtered$ = this.filteredSource.asObservable();
  filteredWithUser: Notes[] = [];
  currentUser$!: Observable<User | null>;
  currentUser!: User;
  private resetFormSubject = new Subject<void>();
  resetForm$ = this.resetFormSubject.asObservable();
  notes = [
    {
      id: 1,
      userId: 'u12345',
      title: 'Team meeting agenda',
      description:
        'Review Q1 results, discuss upcoming project milestones, and assign action items for the marketing campaign. Need to prepare slides for the presentation.',
      dueDate: '2025-03-31',
      isCompleted: true,
      priority: 'High',
      category: 'Work',
    },
    {
      id: 2,
      userId: 'u12345',
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
      userId: 'u67890',
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
      userId: 'u67890',
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
      userId: 'u24680',
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
      userId: 'u24680',
      title: 'Learning goals',
      description:
        'Complete Angular course by end of month. Practice building at least two small projects. Focus on mastering component communication and state management.',
      dueDate: '2025-03-30',
      isCompleted: false,
      priority: 'High',
      category: 'Education',
    },
    {
      id: 7,
      userId: 'u12345',
      title: 'Client presentation',
      description:
        'Prepare slides for quarterly client review. Include performance metrics, campaign results, and proposed strategy for next quarter. Schedule rehearsal with team beforehand.',
      dueDate: '2025-03-25',
      isCompleted: false,
      priority: 'High',
      category: 'Work',
    },
    {
      id: 8,
      userId: 'u67890',
      title: 'Home maintenance',
      description:
        'Schedule HVAC servicing, replace air filters, and check smoke detector batteries. Also need to clean gutters before the spring rains start.',
      dueDate: '2025-04-05',
      isCompleted: false,
      priority: 'Medium',
      category: 'Personal',
    },
    {
      id: 9,
      userId: 'u24680',
      title: 'Book club selection',
      description:
        'Finish reading "The Midnight Library" before next Thursday\'s meeting. Prepare discussion questions and key themes to share with the group.',
      dueDate: '2025-03-20',
      isCompleted: false,
      priority: 'Low',
      category: 'Personal',
    },
    {
      id: 10,
      userId: 'u12345',
      title: 'Budget review',
      description:
        'Analyze department spending for Q1 and identify areas for optimization. Prepare variance report and recommendations for leadership meeting.',
      dueDate: '2025-04-10',
      isCompleted: false,
      priority: 'Medium',
      category: 'Work',
    },
    {
      id: 11,
      userId: 'u67890',
      title: 'Vacation planning',
      description:
        'Research accommodations and activities for summer trip to Costa Rica. Book flights at least 3 months in advance to get better rates.',
      dueDate: '2025-05-15',
      isCompleted: false,
      priority: 'Medium',
      category: 'Personal',
    },
    {
      id: 12,
      userId: 'u24680',
      title: 'Networking event',
      description:
        'Prepare for industry conference next month. Update resume, business cards, and LinkedIn profile. Research attendees and plan key connections to make.',
      dueDate: '2025-04-20',
      isCompleted: false,
      priority: 'High',
      category: 'Professional Development',
    },
  ];

  constructor(private store: Store<AppState>) {
    this.filteredSource.next(this.notes);
    this.activeNoteSubject.next(undefined);
    this.currentUser$ = this.store.select(selectLoginUser);
    this.currentUser$.subscribe((user) => {
      if (user) {
        this.currentUser = user;
        this.filteredWithUser = user
          ? this.notes.filter((note) => note.userId === user.id)
          : [];
        this.filteredSource.next(this.filteredWithUser);
      } else {
        this.filteredSource.next([]);
      }
    });
    // this.filteredWithUser = this.currentUser
    //   ? this.notes.filter((note) => note.userId === this.currentUser?.id)
    //   : this.notes;
  }

  createNewNote(newNote: Notes) {
    let newId;
    if (this.filteredWithUser.length != 0) {
      newId = this.filteredWithUser[this.filteredWithUser.length - 1]?.id + 1;
    } else {
      newId = 1;
    }
    // console.log(newId);
    this.filteredSource.next(
      (this.filteredWithUser = [
        ...this.filteredWithUser,
        {
          ...newNote,
          id: newId,
          userId: this.currentUser?.id,
        },
      ])
    );
  }
  editNote(newNote: Notes) {
    const toBeEdited = this.filteredWithUser.findIndex(
      (note) => note.id === newNote.id
    );
    console.log(newNote, toBeEdited);
    this.filteredWithUser[toBeEdited] = newNote;
    this.filteredSource.next(
      (this.filteredWithUser = [...this.filteredWithUser])
    );
    console.log(this.filteredWithUser);
  }
  deleteNote(newNote: Notes) {
    const indexToDelete = this.filteredWithUser.findIndex(
      (note) => note.id === newNote.id
    );
    if (indexToDelete !== -1) {
      this.filteredWithUser.splice(indexToDelete, 1);
    }
    this.filteredSource.next(this.filteredWithUser);
    console.log(this.filteredWithUser);
  }

  setActiveNote(note: Notes | undefined) {
    this.activeNoteSubject.next(note);
    if (note === undefined) {
      this.resetFormSubject.next();
    }
  }
  // changeNoteStatus(id: number) {
  //   console.log(this.notes);
  // }

  sortNotes(criteria: string) {
    const priorityObj = ['High', 'Medium', 'Low'];
    const progressObj = [true, false];
    if (criteria == 'priority') {
      this.filteredSource.next(
        this.filteredWithUser.sort(
          (a, b) =>
            priorityObj.findIndex((index) => index == a.priority) -
            priorityObj.findIndex((index) => index == b.priority)
        )
      );
    }
    if (criteria == 'priority_inv') {
      this.filteredSource.next(
        this.filteredWithUser.sort(
          (a, b) =>
            priorityObj.findIndex((index) => index == b.priority) -
            priorityObj.findIndex((index) => index == a.priority)
        )
      );
    }
    if (criteria == 'progress') {
      this.filteredSource.next(
        this.filteredWithUser.sort(
          (a, b) =>
            progressObj.findIndex((index) => index == a.isCompleted) -
            progressObj.findIndex((index) => index == b.isCompleted)
        )
      );
    }
    if (criteria == 'progress_inv') {
      this.filteredSource.next(
        this.filteredWithUser.sort(
          (a, b) =>
            progressObj.findIndex((index) => index == b.isCompleted) -
            progressObj.findIndex((index) => index == a.isCompleted)
        )
      );
    }
    if (criteria == 'deadline') {
      this.filteredSource.next(
        this.filteredWithUser.sort((a, b) => {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        })
      );
    }
    if (criteria == 'deadline_inv') {
      this.filteredSource.next(
        this.filteredWithUser.sort((a, b) => {
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        })
      );
    }
  }
  filteredNotes(searchText: string) {
    if (!searchText) {
      this.filteredSource.next(this.filteredWithUser);
    }
    this.filteredSource.next(
      this.filteredWithUser.filter(
        (note) =>
          note.title.toLowerCase().includes(searchText.toLowerCase()) ||
          note.category.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }
}
