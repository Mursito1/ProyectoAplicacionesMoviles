import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MostrarqrPage } from './mostrarqr.page';

describe('MostrarqrPage', () => {
  let component: MostrarqrPage;
  let fixture: ComponentFixture<MostrarqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostrarqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
