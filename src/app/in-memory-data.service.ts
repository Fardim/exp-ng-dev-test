import { Note } from './_models/Note';

import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const notes: Note[] = [
      {
        id: 1,
        title: 'Works',
        color: 'red',
        createDate: '12-10-2020',
      },
      {
        id: 2,
        title: 'Testing',
        color: 'yellow',
        createDate: '12-17-2020',
      },
      {
        id: 3,
        title: 'Note are not saved',
        color: 'pink',
        createDate: '12-19-2020',
      },
      {
        id: 4,
        title: 'Note for green',
        color: 'lightgreen',
        createDate: '12-19-2020',
      },
      {
        id: 5,
        title: 'Note for Sky blue',
        color: 'skyblue',
        createDate: '12-27-2020',
      },
    ];
    return { notes };
  }

  genId(notes: Note[]): number {
    return notes.length > 0
      ? Math.max(...notes.map((hero) => hero.id)) + 1
      : 11;
  }
}
