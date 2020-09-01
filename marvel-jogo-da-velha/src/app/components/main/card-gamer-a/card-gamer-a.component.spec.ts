import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGamerAComponent } from './card-gamer-a.component';

describe('CardGamerAComponent', () => {
  let component: CardGamerAComponent;
  let fixture: ComponentFixture<CardGamerAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGamerAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGamerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
