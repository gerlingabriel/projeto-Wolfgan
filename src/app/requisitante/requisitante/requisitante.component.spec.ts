import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitanteComponent } from './requisitante.component';

describe('RequisitanteComponent', () => {
  let component: RequisitanteComponent;
  let fixture: ComponentFixture<RequisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
