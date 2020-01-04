import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreendotcardComponent } from './greendotcard.component';

describe('GreendotcardComponent', () => {
  let component: GreendotcardComponent;
  let fixture: ComponentFixture<GreendotcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreendotcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreendotcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
