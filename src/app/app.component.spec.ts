import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { MatCard } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(MatCard)
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show card with headline', async(() => {
    const headline = fixture.debugElement.query(By.css('mat-card h1'));
    expect(headline).toBeTruthy();
    expect(headline.nativeElement.textContent).toContain('Routes');
  }));
});
