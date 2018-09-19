import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'routes-random-gif',
  templateUrl: './random-gif.component.html',
  styleUrls: ['./random-gif.component.scss']
})
export class RandomGifComponent implements OnInit {

  readonly urls = [
    'https://giphy.com/embed/3o6Zt6ML6BklcajjsA',
    'https://giphy.com/embed/l4FsIC6XXeS0wGIBG',
    'https://giphy.com/embed/mq5y2jHRCAqMo',
    'https://giphy.com/embed/26u6bnal23NhnIoZG',
    'https://giphy.com/embed/Jalikml2XiUgw',
    'https://giphy.com/embed/3oxRmGNqKwCzJ0AwPC',
    'https://giphy.com/embed/bxZUJhtAMmOnm',
    'https://giphy.com/embed/nIc3xUWWpfamI',
    'https://giphy.com/embed/KE9cblgPK6EPS',
    'https://giphy.com/embed/jVFgWDtkY5v2M',
    'https://giphy.com/embed/GbIHIHhkgfpAs',
    'https://giphy.com/embed/nKN7E76a27Uek',
    'https://giphy.com/embed/3ohfFp1ureujZgWSVa',
    'https://giphy.com/embed/3og0IQvQkzyfxgjzLa',
    'https://giphy.com/embed/ihynxz6JxlmN2',
    'https://giphy.com/embed/EimNpKJpihLY4',
    'https://giphy.com/embed/ToMjGpBmDyMmBrMmbf2',
    'https://giphy.com/embed/pjzbionhFdccw',
    'https://giphy.com/embed/PAujV4AqViWCA',
    'https://giphy.com/embed/3o7rc0N1lGLO9dUAz6',
    'https://giphy.com/embed/TrXccx2cCI6Xu',
    'https://giphy.com/embed/3ornjU8Cd8FW1nhG6s',
    'https://giphy.com/embed/26tPughh56URCl2og',
    'https://giphy.com/embed/l4Ki5iMwlTt1ojWHC',
    'https://giphy.com/embed/m2cwjSBcq67fi'
  ];

  url: string;

  ngOnInit() {
    this.url = this.urls[Math.floor(Math.random() * this.urls.length)];
  }
}
