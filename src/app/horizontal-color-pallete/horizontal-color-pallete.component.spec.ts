import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalColorPalleteComponent } from './horizontal-color-pallete.component';

describe('HorizontalColorPalleteComponent', () => {
  let component: HorizontalColorPalleteComponent;
  let fixture: ComponentFixture<HorizontalColorPalleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalColorPalleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalColorPalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
