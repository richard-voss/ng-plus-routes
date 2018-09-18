import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGifComponent } from './random-gif.component';
import { SafePipe } from '../safe.pipe';

describe('RandomGifComponent', () => {
  let component: RandomGifComponent;
  let fixture: ComponentFixture<RandomGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomGifComponent, SafePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
