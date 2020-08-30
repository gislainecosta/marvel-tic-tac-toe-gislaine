import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVitoriaShieldComponent } from './card-vitoria-shield.component';

describe('CardVitoriaShieldComponent', () => {
  let component: CardVitoriaShieldComponent;
  let fixture: ComponentFixture<CardVitoriaShieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVitoriaShieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVitoriaShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
