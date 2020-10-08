import { Note } from './../_models/Note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesUrl = 'api/notes';
  constructor(private http: HttpClient) {}

  getNotes(color): Observable<Note[]> {
    let url = `${this.notesUrl}/`;
    if (color) {
      url += `?color=${color}`;
    }
    return this.http.get<Note[]>(url).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createNote(note: Note): Observable<Note> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const newProduct = { ...note, id: null };
    return this.http
      .post<Note>(this.notesUrl, newProduct, { headers })
      .pipe(
        tap((data) => console.log('createNote: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteNote(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.notesUrl}/${id}`;
    return this.http
      .delete<Note>(url, { headers })
      .pipe(
        tap((data) => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }
  updateNote(note: Note): Observable<Note> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .put<Note>(url, note, { headers })
      .pipe(
        tap(() => console.log('updateNote: ' + note.id)),
        map(() => note),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
