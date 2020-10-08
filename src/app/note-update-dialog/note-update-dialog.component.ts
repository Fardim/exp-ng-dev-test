import { Note } from './../_models/Note';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromNote from './../state';
import { NoteState } from './../state/note.reducer';
import * as noteActions from './../state/note.action';

@Component({
  selector: 'app-note-update-dialog',
  templateUrl: './note-update-dialog.component.html',
  styleUrls: ['./note-update-dialog.component.scss'],
})
export class NoteUpdateDialogComponent implements OnInit {
  note: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NoteUpdateDialogComponent>,
    private store: Store<NoteState>
  ) {}

  ngOnInit(): void {
    this.note = this.data.note.title;
  }
  selectedColor(event) {
    if (this.note) {
      let obj = {
        id: this.data.note.id,
        title: this.note,
        createDate: new Date().toISOString(),
        color: event,
      };
      this.store.dispatch(new noteActions.UpdateNote(obj));
      this.dialogRef.close({ CloseOnPurpose: true });
    }
  }

  deleteNote() {
    this.store.dispatch(new noteActions.DeleteNote(this.data.note.id));
    this.dialogRef.close({ CloseOnPurpose: true });
  }
}
