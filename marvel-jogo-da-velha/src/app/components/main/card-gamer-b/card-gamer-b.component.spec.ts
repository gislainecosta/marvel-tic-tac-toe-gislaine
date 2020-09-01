import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGamerBComponent } from './card-gamer-b.component';

describe('CardGamerBComponent', () => {
  let component: CardGamerBComponent;
  let fixture: ComponentFixture<CardGamerBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGamerBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGamerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
