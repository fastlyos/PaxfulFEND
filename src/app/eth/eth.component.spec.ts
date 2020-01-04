import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETHComponent } from './eth.component';

describe('ETHComponent', () => {
  let component: ETHComponent;
  let fixture: ComponentFixture<ETHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
