import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomStatementComponent } from './random-statement.component';

describe('RandomStatementComponent', () => {
  let component: RandomStatementComponent;
  let fixture: ComponentFixture<RandomStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
