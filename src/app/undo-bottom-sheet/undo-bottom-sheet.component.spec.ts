import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoBottomSheetComponent } from './undo-bottom-sheet.component';

describe('UndoBottomSheetComponent', () => {
  let component: UndoBottomSheetComponent;
  let fixture: ComponentFixture<UndoBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndoBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
