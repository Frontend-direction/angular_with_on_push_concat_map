import { Injectable } from '@angular/core';
import { of , Observable, shareReplay} from 'rxjs';
import { Photo } from '../../shared/photo.interface';


const photos = [
  {
    url: 'assets/1.jpg',
    alt: 'first image'
  },
  {
    url: 'assets/2.jpg',
    alt: 'second image'
  },
  {
    url: 'assets/3.jpg',
    alt: 'third image'
  },
  {
    url: 'assets/4.jpg',
    alt: 'fourth image'
  },
  {
    url: 'assets/5.jpg',
    alt: 'fourth image'
  },
  {
    url: 'assets/6.jpg',
    alt: 'fourth image'
  },
]
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getPhotos(): Observable<Photo[]> {
    return of(photos).pipe(shareReplay())
  }
}
