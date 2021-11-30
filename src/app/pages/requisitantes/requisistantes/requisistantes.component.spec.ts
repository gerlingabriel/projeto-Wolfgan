/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RequisistantesComponent } from './requisistantes.component';

describe('RequisistantesComponent', () => {
  let component: RequisistantesComponent;
  let fixture: ComponentFixture<RequisistantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisistantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisistantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
