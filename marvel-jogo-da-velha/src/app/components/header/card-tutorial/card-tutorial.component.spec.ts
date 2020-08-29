import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTutorialComponent } from './card-tutorial.component';

describe('CardTutorialComponent', () => {
  let component: CardTutorialComponent;
  let fixture: ComponentFixture<CardTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
