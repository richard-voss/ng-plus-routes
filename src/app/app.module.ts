import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { RandomStatementComponent } from './random-statement/random-statement.component';
import { RandomGifComponent } from './random-gif/random-gif.component';
import { SafePipe } from './safe.pipe';
import { WisePersonComponent } from './wise-person/wise-person.component';
import { LandscapeComponent } from './landscape/landscape.component';


const adviceChildren: Routes = [
  { path: 'person', component: WisePersonComponent },
  {
    path: 'landscape', component: LandscapeComponent, data: {
      images: [
        'https://www.maxpixel.net/static/photo/2x/Flow-Calming-Waterfall-Nature-Water-Bach-Forest-746108.jpg',
        'https://www.maxpixel.net/static/photo/640/Cascade-Blur-Forest-Blurred-Fall-Flow-Flowing-21653.jpg',
        'https://www.maxpixel.net/static/photo/640/Flowing-Creek-Forest-Green-Flow-Landscape-Falls-21749.jpg',
        'https://www.maxpixel.net/static/photo/640/Water-Natural-Water-Nature-Leaves-Waterfall-142636.jpg'
      ]
    }
  }
];

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
    RouterModule.forRoot([
      { path: 'gif', component: RandomGifComponent },
      {
        path: 'advice', component: RandomStatementComponent, children: adviceChildren
      },
      { path: 'gif', component: RandomGifComponent, outlet: 'right' },
      { path: 'advice', component: RandomStatementComponent, outlet: 'right', children: adviceChildren }
    ]),
    BrowserModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
