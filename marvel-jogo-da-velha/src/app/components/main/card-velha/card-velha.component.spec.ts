import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVelhaComponent } from './card-velha.component';

describe('CardVelhaComponent', () => {
  let component: CardVelhaComponent;
  let fixture: ComponentFixture<CardVelhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVelhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
