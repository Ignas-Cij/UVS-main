import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OruPrognozeComponent } from './oru-prognoze.component';

describe('OruPrognozeComponent', () => {
  let component: OruPrognozeComponent;
  let fixture: ComponentFixture<OruPrognozeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OruPrognozeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OruPrognozeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
