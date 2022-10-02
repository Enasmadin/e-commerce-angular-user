import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliesProdouctComponent } from './detalies-prodouct.component';

describe('DetaliesProdouctComponent', () => {
  let component: DetaliesProdouctComponent;
  let fixture: ComponentFixture<DetaliesProdouctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliesProdouctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaliesProdouctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
