import { Note } from './../_models/Note';
import { Action } from '@ngrx/store';

export enum NoteActionTypes {
  Load = '[Note] Load',
  LoadSuccess = '[Note] Load Success',
  LoadFail = '[Note] Load Fail',
  AddNote = '[Note] Add Note',
  AddNoteSuccess = '[Note] Add Note Success',
  AddNoteFail = '[Note] Add Note Fail',
  LastAddedNote = '[Note] Last Added Note',
  UpdateNote = '[Note] Update Note',
  UpdateNoteSuccess = '[Note] Update Note Success',
  UpdateNoteFail = '[Note] Update Note Fail',
  DeleteNote = '[Note] Delete Note',
  DeleteNoteSuccess = '[Note] Delete Note Success',
  DeleteNoteFail = '[Note] Delete Note Fail',
}

export class Load implements Action {
  readonly type = NoteActionTypes.Load;
  constructor(public payload: string) {}
}
export class LoadSuccess implements Action {
  readonly type = NoteActionTypes.LoadSuccess;
  constructor(public payload: Note[]) {}
}
export class LoadFail implements Action {
  readonly type = NoteActionTypes.LoadFail;
  constructor(public payload: string) {}
}

export class AddNote implements Action {
  readonly type = NoteActionTypes.AddNote;
  constructor(public payload: Note) {}
}
export class AddNoteSuccess implements Action {
  readonly type = NoteActionTypes.AddNoteSuccess;
  constructor(public payload: Note) {}
}
export class AddNoteFail implements Action {
  readonly type = NoteActionTypes.AddNoteFail;
  constructor(public payload: string) {}
}

export class UpdateNote implements Action {
  readonly type = NoteActionTypes.UpdateNote;
  constructor(public payload: Note) {}
}
export class UpdateNoteSuccess implements Action {
  readonly type = NoteActionTypes.UpdateNoteSuccess;
  constructor(public payload: Note) {}
}
export class UpdateNoteFail implements Action {
  readonly type = NoteActionTypes.UpdateNoteFail;
  constructor(public payload: string) {}
}

export class DeleteNote implements Action {
  readonly type = NoteActionTypes.DeleteNote;
  constructor(public payload: number) {}
}
export class DeleteNoteSuccess implements Action {
  readonly type = NoteActionTypes.DeleteNoteSuccess;
  constructor(public payload: number) {}
}
export class DeleteNoteFail implements Action {
  readonly type = NoteActionTypes.DeleteNoteFail;
  constructor(public payload: string) {}
}

export type NoteActions =
  | Load
  | LoadSuccess
  | LoadFail
  | AddNote
  | AddNoteSuccess
  | AddNoteFail
  | UpdateNote
  | UpdateNoteSuccess
  | UpdateNoteFail
  | DeleteNote
  | DeleteNoteSuccess
  | DeleteNoteFail;
