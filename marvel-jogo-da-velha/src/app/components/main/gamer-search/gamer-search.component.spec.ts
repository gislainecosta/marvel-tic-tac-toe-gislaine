import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerSearchComponent } from './gamer-search.component';

describe('GamerSearchComponent', () => {
  let component: GamerSearchComponent;
  let fixture: ComponentFixture<GamerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
