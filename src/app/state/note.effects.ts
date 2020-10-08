import { Note } from './../_models/Note';
import { NoteService } from './../_services/note.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromNoteActions from './note.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class NoteEffects {
  constructor(private actions$: Actions, private noteService: NoteService) {}

  @Effect()
  loadNotes$ = this.actions$.pipe(
    ofType(fromNoteActions.NoteActionTypes.Load),
    map((action: fromNoteActions.Load) => action.payload),
    mergeMap((color: string) => {
      debugger;
      return this.noteService.getNotes(color).pipe(
        map((notes: Note[]) => new fromNoteActions.LoadSuccess(notes)),
        catchError((err) => of(new fromNoteActions.LoadFail(err)))
      );
    })
  );

  @Effect()
  updateNote$ = this.actions$.pipe(
    ofType(fromNoteActions.NoteActionTypes.UpdateNote),
    map((action: fromNoteActions.UpdateNote) => action.payload),
    mergeMap((product: Note) =>
      this.noteService.updateNote(product).pipe(
        map(
          (updatedNote) => new fromNoteActions.UpdateNoteSuccess(updatedNote)
        ),
        catchError((err) => of(new fromNoteActions.UpdateNoteFail(err)))
      )
    )
  );

  @Effect()
  addProduct$ = this.actions$.pipe(
    ofType(fromNoteActions.NoteActionTypes.AddNote),
    map((action: fromNoteActions.AddNote) => action.payload),
    mergeMap((note: Note) =>
      this.noteService.createNote(note).pipe(
        map((addedNote) => new fromNoteActions.AddNoteSuccess(addedNote)),
        catchError((err) => of(new fromNoteActions.AddNoteFail(err)))
      )
    )
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(fromNoteActions.NoteActionTypes.DeleteNote),
    map((action: fromNoteActions.DeleteNote) => action.payload),
    mergeMap((id: number) =>
      this.noteService.deleteNote(id).pipe(
        map(() => new fromNoteActions.DeleteNoteSuccess(id)),
        catchError((err) => of(new fromNoteActions.DeleteNoteFail(err)))
      )
    )
  );
}
