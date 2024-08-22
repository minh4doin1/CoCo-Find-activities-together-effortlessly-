import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroSwipePage } from './intro-swipe.page';

describe('IntroSwipePage', () => {
  let component: IntroSwipePage;
  let fixture: ComponentFixture<IntroSwipePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSwipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
