import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitoriaHydraComponent } from './vitoria-hydra.component';

describe('VitoriaHydraComponent', () => {
  let component: VitoriaHydraComponent;
  let fixture: ComponentFixture<VitoriaHydraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitoriaHydraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitoriaHydraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
