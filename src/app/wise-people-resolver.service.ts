import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WisePeopleResolverService implements Resolve<string[]> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return of([
      'https://wisewomen.com.au/wp-content/uploads/2015/10/WW-Marie-Curie.jpg',
      'https://wisewomen.com.au/wp-content/uploads/2018/01/WW-Angela-Merkel.jpg',
      'https://memegenerator.net/img/images/300x300/10318247/mr-ts-shakespearean-wisdom.jpg',
      'https://memegenerator.net/img/images/300x300/11776471/wisdom-dropping-confucius.jpg',
      'https://memegenerator.net/img/images/300x300/16037641/wisdom-of-yoda.jpg'
    ]).pipe(delay(2000));
  }
}
