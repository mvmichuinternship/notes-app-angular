import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponentComponent } from './notes-component.component';

describe('NotesComponentComponent', () => {
  let component: NotesComponentComponent;
  let fixture: ComponentFixture<NotesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
