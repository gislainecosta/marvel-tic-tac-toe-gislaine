import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVitoriaHydraComponent } from './card-vitoria-hydra.component';

describe('CardVitoriaHydraComponent', () => {
  let component: CardVitoriaHydraComponent;
  let fixture: ComponentFixture<CardVitoriaHydraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVitoriaHydraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVitoriaHydraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
