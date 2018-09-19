import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomStatementComponent } from './random-statement.component';
import { MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('RandomStatementComponent', () => {
  let component: RandomStatementComponent;
  let fixture: ComponentFixture<RandomStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomStatementComponent],
      imports: [MatIconModule, RouterTestingModule]
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
