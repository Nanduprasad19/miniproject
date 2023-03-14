import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlepage3Component } from './singlepage3.component';

describe('Singlepage3Component', () => {
  let component: Singlepage3Component;
  let fixture: ComponentFixture<Singlepage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singlepage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlepage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
