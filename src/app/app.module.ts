import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RandomStatementComponent } from './random-statement/random-statement.component';
import { RandomGifComponent } from './random-gif/random-gif.component';
import { SafePipe } from './safe.pipe';
import { WisePersonComponent } from './wise-person/wise-person.component';
import { LandscapeComponent } from './landscape/landscape.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomStatementComponent,
    RandomGifComponent,
    SafePipe,
    WisePersonComponent,
    LandscapeComponent
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
