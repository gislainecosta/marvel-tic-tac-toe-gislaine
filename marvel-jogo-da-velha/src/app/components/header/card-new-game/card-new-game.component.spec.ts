import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewGameComponent } from './card-new-game.component';

describe('CardNewGameComponent', () => {
  let component: CardNewGameComponent;
  let fixture: ComponentFixture<CardNewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNewGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
