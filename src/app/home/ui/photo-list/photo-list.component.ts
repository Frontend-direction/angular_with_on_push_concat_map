import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Photo } from '../../../shared/photo.interface';


@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent {
  @Input() photos!: Photo[] | null
}
