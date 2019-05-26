import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApayaComponent } from './apaya.component';

describe('ApayaComponent', () => {
  let component: ApayaComponent;
  let fixture: ComponentFixture<ApayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
