import * as noteActions from './../state/note.action';
import { Note } from './../_models/Note';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromNote from './../state';
import { NoteState } from './../state/note.reducer';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-undo-bottom-sheet',
  templateUrl: './undo-bottom-sheet.component.html',
  styleUrls: ['./undo-bottom-sheet.component.scss'],
})
export class UndoBottomSheetComponent implements OnInit, OnDestroy {
  lastAddedNote: Note = null;
  private unsubscribeAll$: Subject<boolean> = new Subject<boolean>();
  constructor(private store: Store<NoteState>) {}
  ngOnDestroy(): void {
    this.unsubscribeAll$.next(true);
    this.unsubscribeAll$.complete();
  }

  ngOnInit(): void {
    this.store
      .pipe(takeUntil(this.unsubscribeAll$), select(fromNote.getLastAddedNote))
      .subscribe((note) => {
        console.log('last note', note);
        this.lastAddedNote = note;
      });
  }
  undoAdded() {
    this.store.dispatch(new noteActions.DeleteNote(this.lastAddedNote.id));
  }
}
