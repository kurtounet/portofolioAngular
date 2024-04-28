import { Component } from '@angular/core';
import { JOBS } from '../data/data.job';
import { CommonModule } from '@angular/common';
import { CardJobComponent } from '../sectionsjobs/card-job/card-job.component';
@Component({
  selector: 'app-sectionsjobs',
  standalone: true,
  imports: [CommonModule, CardJobComponent],
  templateUrl: './sectionsjobs.component.html',
  styleUrl: './sectionsjobs.component.sass'
})
export class SectionsjobsComponent {
  listJobs = JOBS;
}
