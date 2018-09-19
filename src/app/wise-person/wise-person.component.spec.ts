import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisePersonComponent } from './wise-person.component';
import { SafePipe } from '../safe.pipe';

describe('WisePersonComponent', () => {
  let component: WisePersonComponent;
  let fixture: ComponentFixture<WisePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisePersonComponent, SafePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
