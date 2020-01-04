import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinewalletComponent } from './onlinewallet.component';

describe('OnlinewalletComponent', () => {
  let component: OnlinewalletComponent;
  let fixture: ComponentFixture<OnlinewalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinewalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinewalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
