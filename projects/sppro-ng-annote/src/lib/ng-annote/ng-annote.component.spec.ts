import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAnnoteComponent } from './ng-annote.component';

describe('NgAnnoteComponent', () => {
  let component: NgAnnoteComponent;
  let fixture: ComponentFixture<NgAnnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAnnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAnnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
