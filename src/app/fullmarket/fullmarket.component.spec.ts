import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullmarketComponent } from './fullmarket.component';

describe('FullmarketComponent', () => {
  let component: FullmarketComponent;
  let fixture: ComponentFixture<FullmarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
