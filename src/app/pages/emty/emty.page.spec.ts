import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmtyPage } from './emty.page';

describe('EmtyPage', () => {
  let component: EmtyPage;
  let fixture: ComponentFixture<EmtyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmtyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
