import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomImageComponent } from './random-image.component';
import { SafePipe } from '../safe.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('RandomImageComponent', () => {
  let component: RandomImageComponent;
  let fixture: ComponentFixture<RandomImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomImageComponent, SafePipe],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
