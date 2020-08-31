import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitoriaShieldComponent } from './vitoria-shield.component';

describe('VitoriaShieldComponent', () => {
  let component: VitoriaShieldComponent;
  let fixture: ComponentFixture<VitoriaShieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitoriaShieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitoriaShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
