import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluebirdamericanexpressComponent } from './bluebirdamericanexpress.component';

describe('BluebirdamericanexpressComponent', () => {
  let component: BluebirdamericanexpressComponent;
  let fixture: ComponentFixture<BluebirdamericanexpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluebirdamericanexpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluebirdamericanexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
