import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhotoService } from './data-access/photo.service';
import { Photo } from '../shared/photo.interface';
import { PhotoListComponent } from './ui/photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SlideshowComponent } from '../slideshow/slideshow.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotoListComponent, CommonModule, MatButtonModule, MatIconModule, SlideshowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  photos$!: Observable<Photo[]>
  showSlideShow = false

  constructor(private photoService: PhotoService){}

  ngOnInit(): void {
    this.photos$ = this.photoService.getPhotos();
  }

  startSlider() {
    this.showSlideShow = true;
  }
}
