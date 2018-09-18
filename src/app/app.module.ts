import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RandomStatementComponent } from './random-statement/random-statement.component';
import { RandomGifComponent } from './random-gif/random-gif.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RandomStatementComponent,
    RandomGifComponent,
    SafePipe
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
