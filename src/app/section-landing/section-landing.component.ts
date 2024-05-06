import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircularListComponent } from '../section-landing/circular-list/circular-list.component';

import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-section-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-landing.component.html',
  styleUrl: './section-landing.component.sass'

})
export class SectionLandingComponent {

  tabTechno = ['angular', 'css3', 'html5', 'symfony'];
  listColor: string[] = ['red', 'blue', 'green', 'yellow', 'purple'];
  firstName: string = 'BOSSUT';
  tabfirstName = this.firstName.split('');
  lastName: string = 'Anthony';
  tablastName = this.lastName.split('');
  items = ['html5', 'ccs3', 'Symfony', 'Angular', 'ApiPlatform', 'Javascript'];
  isOpen = false;



}
