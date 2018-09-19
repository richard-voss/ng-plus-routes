import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'routes-wise-person',
  templateUrl: './wise-person.component.html',
  styleUrls: ['./wise-person.component.scss']
})
export class WisePersonComponent implements OnInit {

  readonly images = [
    'https://wisewomen.com.au/wp-content/uploads/2015/10/WW-Marie-Curie.jpg',
    'https://wisewomen.com.au/wp-content/uploads/2018/01/WW-Angela-Merkel.jpg',
    'https://memegenerator.net/img/images/300x300/10318247/mr-ts-shakespearean-wisdom.jpg',
    'https://memegenerator.net/img/images/300x300/11776471/wisdom-dropping-confucius.jpg',
    'https://memegenerator.net/img/images/300x300/16037641/wisdom-of-yoda.jpg'
  ];

  image: string;

  ngOnInit() {
    this.image = this.images[Math.floor(Math.random() * this.images.length)];
  }

}
