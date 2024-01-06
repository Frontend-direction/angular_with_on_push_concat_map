import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Photo } from '../shared/photo.interface';
import { SlideshowImageComponent } from './ui/slideshow-image/slideshow-image.component';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [SlideshowImageComponent],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input() photos: Photo[]  = [];
  
  currentPhoto: Photo | null = null;

  private sliderShowInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.playSlideShow();
  }

  ngOnDestroy() { 
    this.clearInterval();
  }


  playSlideShow() {
    if(!this.photos) return;

    let currentPhotoIndex = this.photos.length - 1;

    this.clearInterval();

    this.sliderShowInterval = setInterval(() => {
      if(currentPhotoIndex >= 0) {
        this.currentPhoto = this.photos[currentPhotoIndex];
        currentPhotoIndex--;
      } else {
        this.clearInterval();
      }
    }, 500);
  }

  clearInterval() {
    clearInterval(this.sliderShowInterval ?? undefined);
  }
}
