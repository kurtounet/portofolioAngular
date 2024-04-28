import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardproject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardproject.component.html',
  styleUrl: './cardproject.component.sass'
})
export class CardprojectComponent {
  @Input() project?: any
}
