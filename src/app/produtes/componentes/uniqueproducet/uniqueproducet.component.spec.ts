import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueproducetComponent } from './uniqueproducet.component';

describe('UniqueproducetComponent', () => {
  let component: UniqueproducetComponent;
  let fixture: ComponentFixture<UniqueproducetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueproducetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueproducetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
