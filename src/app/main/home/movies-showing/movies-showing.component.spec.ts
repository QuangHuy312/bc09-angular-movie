import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesShowingComponent } from './movies-showing.component';

describe('MoviesShowingComponent', () => {
  let component: MoviesShowingComponent;
  let fixture: ComponentFixture<MoviesShowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesShowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
