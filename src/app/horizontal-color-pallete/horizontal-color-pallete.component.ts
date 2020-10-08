import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-horizontal-color-pallete',
  templateUrl: './horizontal-color-pallete.component.html',
  styleUrls: ['./horizontal-color-pallete.component.scss'],
  animations: [
    trigger('enterLeftRightAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HorizontalColorPalleteComponent implements OnInit {
  @Output() OutSelectedColor: EventEmitter<string> = new EventEmitter<string>();
  colors: any[] = [
    {
      backgroundColor: 'skyblue',
    },
    { backgroundColor: 'pink' },
    { backgroundColor: 'red' },
    {
      backgroundColor: 'lightgreen',
    },
    {
      backgroundColor: 'yellow',
    },
    {
      backgroundColor: 'aqua',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  selectedColor(color: string) {
    this.OutSelectedColor.emit(color);
  }
}
