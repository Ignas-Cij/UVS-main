import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObuoliuSkaiciuokleComponent } from './obuoliu-skaiciuokle.component';

describe('ObuoliuSkaiciuokleComponent', () => {
  let component: ObuoliuSkaiciuokleComponent;
  let fixture: ComponentFixture<ObuoliuSkaiciuokleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObuoliuSkaiciuokleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObuoliuSkaiciuokleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
