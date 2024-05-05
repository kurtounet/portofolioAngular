import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circular-list.component.html',
  styleUrl: './circular-list.component.sass'
})
export class CircularListComponent {
  items = ['html5',  'symfony', 'angular', 'apiplatform', 'javascript'];
}
