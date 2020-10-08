import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NoteState } from './note.reducer';

export interface State {
  note: NoteState;
}

const getNoteFeatureState = createFeatureSelector<NoteState>('note');

export const getNotes = createSelector(getNoteFeatureState, (state) => {
  console.log(state.notes);
  return state.notes;
});

export const getError = createSelector(getNoteFeatureState, (state) => {
  return state.error;
});
