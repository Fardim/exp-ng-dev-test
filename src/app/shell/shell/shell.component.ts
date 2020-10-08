import { Component, OnInit } from '@angular/core';
import * as noteActions from './../../state/note.action';
import { NoteState } from './../../state/note.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  navigations: any[] = [
    {
      path: '/show-all',
      title: 'Show All',
      backgroundColor: '',
      color: '#333',
    },
    {
      path: '/sky-blue',
      title: 'Sky Blue',
      backgroundColor: 'skyblue',
      color: '#333',
    },
    { path: '/pink', title: 'Pink', backgroundColor: 'pink', color: '#333' },
    { path: '/red', title: 'Red', backgroundColor: 'red', color: '#333' },
    {
      path: '/green',
      title: 'Green',
      backgroundColor: 'lightgreen',
      color: '#333',
    },
    {
      path: '/yellow',
      title: 'Yellow',
      backgroundColor: 'yellow',
      color: '#333',
    },
    {
      path: '/magenta',
      title: 'Magenta',
      backgroundColor: 'aqua',
      color: '#333',
    },
  ];
  constructor(private store: Store<NoteState>) {}

  ngOnInit(): void {}

  colorSelected(backgroundColor) {
    this.store.dispatch(new noteActions.Load(backgroundColor));
  }
}
