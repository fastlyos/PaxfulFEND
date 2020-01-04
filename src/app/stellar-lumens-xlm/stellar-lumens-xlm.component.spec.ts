import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarLumensXLMComponent } from './stellar-lumens-xlm.component';

describe('StellarLumensXLMComponent', () => {
  let component: StellarLumensXLMComponent;
  let fixture: ComponentFixture<StellarLumensXLMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StellarLumensXLMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StellarLumensXLMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
