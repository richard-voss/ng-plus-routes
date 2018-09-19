import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'routes-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit {

  images: string[] = [];
  image: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.images = data.images;
      this.image = this.images[Math.floor(Math.random() * this.images.length)];
    });
  }
}
