import { NoteUpdateDialogComponent } from './../note-update-dialog/note-update-dialog.component';
import * as noteActions from './../state/note.action';
import { Note } from './../_models/Note';
import * as fromNote from './../state';
import { NoteState } from './../state/note.reducer';
import { NoteService } from './../_services/note.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss'],
  animations: [
    trigger('enterLeftRightAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('3000ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ShowAllComponent implements OnInit {
  notes: Note[] = [];
  note: string;
  enableColorPallete: boolean = false;
  private unsubscribeAll$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<NoteState>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store
      .pipe(takeUntil(this.unsubscribeAll$), select(fromNote.getNotes))
      .subscribe((notes) => {
        debugger;
        console.log('notes', notes);
        this.notes = notes;
      });
    this.store.dispatch(new noteActions.Load(''));
  }
  selectedColor(event) {
    console.log(event);
    if (this.note) {
      let obj = {
        id: null,
        title: this.note,
        createDate: new Date().toISOString(),
        color: event,
      };
      this.store.dispatch(new noteActions.AddNote(obj));
      this.note = '';
    }
  }
  updateNote(note) {
    const dialogRef = this.dialog.open(NoteUpdateDialogComponent, {
      width: '30vw',
      data: {
        note: note,
      },
      autoFocus: false,
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((result) => {
        debugger;
      });
  }
  ngOnDestroy(): void {
    this.unsubscribeAll$.next(true);
    this.unsubscribeAll$.complete();
  }
}
