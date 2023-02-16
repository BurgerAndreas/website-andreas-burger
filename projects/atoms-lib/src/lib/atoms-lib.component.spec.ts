import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsLibComponent } from './atoms-lib.component';

describe('AtomsLibComponent', () => {
  let component: AtomsLibComponent;
  let fixture: ComponentFixture<AtomsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomsLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
