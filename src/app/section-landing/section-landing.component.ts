import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularListComponent } from '../section-landing/circular-list/circular-list.component';
@Component({
  selector: 'app-section-landing',
  standalone: true,
  imports: [CommonModule, CircularListComponent],
  templateUrl: './section-landing.component.html',
  styleUrl: './section-landing.component.sass'
})
export class SectionLandingComponent {
  items = ['html5', 'ccs3', 'Symfony', 'Angular', 'ApiPlatform', 'Javascript'];
}
