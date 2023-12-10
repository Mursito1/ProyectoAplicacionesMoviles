import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomeprofPage } from './homeprof.page';

describe('HomeprofPage', () => {
  let component: HomeprofPage;
  let fixture: ComponentFixture<HomeprofPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeprofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
