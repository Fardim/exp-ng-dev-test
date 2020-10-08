import { NoteActions, NoteActionTypes } from './note.action';
import { Note } from './../_models/Note';

export interface NoteState {
  lastAddedNote: Note;
  notes: Note[];
  error: string;
}

const initialState: NoteState = {
  lastAddedNote: null,
  notes: [],
  error: '',
};

export function reducer(state = initialState, action: NoteActions): NoteState {
  switch (action.type) {
    case NoteActionTypes.LoadSuccess:
      return {
        ...state,
        notes: action.payload,
        error: '',
      };
    case NoteActionTypes.LoadFail:
      return {
        ...state,
        notes: [],
        error: action.payload,
      };
    case NoteActionTypes.AddNoteSuccess:
      const addedProducts = [...state.notes, action.payload];
      return {
        ...state,
        notes: addedProducts,
        lastAddedNote: action.payload,
        error: '',
      };
    case NoteActionTypes.AddNoteFail:
      return {
        ...state,
        error: action.payload,
      };
    case NoteActionTypes.UpdateNoteSuccess:
      const updatedNotes = state.notes.map((item) =>
        action.payload.id == item.id ? action.payload : item
      );
      return {
        ...state,
        notes: updatedNotes,
        error: '',
      };
    case NoteActionTypes.UpdateNoteFail:
      return {
        ...state,
        error: action.payload,
      };
    case NoteActionTypes.DeleteNoteSuccess:
      const deletedNotes = state.notes.filter((d) => d.id != action.payload);
      return {
        ...state,
        notes: deletedNotes,
        error: '',
      };
    case NoteActionTypes.DeleteNoteFail:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
