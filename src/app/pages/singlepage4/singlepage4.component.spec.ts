import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlepage4Component } from './singlepage4.component';

describe('Singlepage4Component', () => {
  let component: Singlepage4Component;
  let fixture: ComponentFixture<Singlepage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singlepage4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlepage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
