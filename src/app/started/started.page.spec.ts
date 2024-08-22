import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartedPage } from './started.page';

describe('StartedPage', () => {
  let component: StartedPage;
  let fixture: ComponentFixture<StartedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
