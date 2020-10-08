import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteUpdateDialogComponent } from './note-update-dialog.component';

describe('NoteUpdateDialogComponent', () => {
  let component: NoteUpdateDialogComponent;
  let fixture: ComponentFixture<NoteUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
