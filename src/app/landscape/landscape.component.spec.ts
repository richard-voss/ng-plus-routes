import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeComponent } from './landscape.component';
import { SafePipe } from '../safe.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandscapeComponent', () => {
  let component: LandscapeComponent;
  let fixture: ComponentFixture<LandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandscapeComponent, SafePipe],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
