import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSideComponent } from './mid-side.component';

describe('MidSideComponent', () => {
  let component: MidSideComponent;
  let fixture: ComponentFixture<MidSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
