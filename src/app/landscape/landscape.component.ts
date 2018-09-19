import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'routes-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.scss']
})
export class LandscapeComponent implements OnInit {

  readonly images = [
    'https://www.maxpixel.net/static/photo/2x/Flow-Calming-Waterfall-Nature-Water-Bach-Forest-746108.jpg',
    'https://www.maxpixel.net/static/photo/640/Cascade-Blur-Forest-Blurred-Fall-Flow-Flowing-21653.jpg',
    'https://www.maxpixel.net/static/photo/640/Flowing-Creek-Forest-Green-Flow-Landscape-Falls-21749.jpg',
    'https://www.maxpixel.net/static/photo/640/Water-Natural-Water-Nature-Leaves-Waterfall-142636.jpg'
  ];

  image: string;

  ngOnInit() {
    this.image = this.images[Math.floor(Math.random() * this.images.length)];
  }
}
