import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RandomStatementComponent } from './random-statement/random-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomStatementComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
