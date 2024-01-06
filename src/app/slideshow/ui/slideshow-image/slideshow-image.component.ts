import { Component, Input } from '@angular/core';
import { Photo } from '../../../shared/photo.interface';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slideshow-image',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './slideshow-image.component.html',
  styleUrl: './slideshow-image.component.scss'
})
export class SlideshowImageComponent {
  @Input()photo: Photo | null = null;

}
