import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardprojectComponent } from './cardproject/cardproject.component';
import { PROJECTS } from '../data/data.project';

@Component({
  selector: 'app-sectionproject',
  standalone: true,
  imports: [
    CommonModule,
    CardprojectComponent
  ],
  templateUrl: './sectionproject.component.html',
  styleUrl: './sectionproject.component.sass'
})
export class SectionprojectComponent {
  listProjects = PROJECTS;
}
