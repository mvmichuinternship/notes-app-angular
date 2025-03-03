import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFilterComponentComponent } from './notes-filter-component.component';

describe('NotesFilterComponentComponent', () => {
  let component: NotesFilterComponentComponent;
  let fixture: ComponentFixture<NotesFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesFilterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
