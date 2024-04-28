import { Component } from '@angular/core';
import { CardSkillsComponent } from '../sectionskills/card-skills/card-skills.component';
import { SKILLS } from '../data/data.skills';

@Component({
  selector: 'app-sectionskills',
  standalone: true,
  imports: [],
  templateUrl: './sectionskills.component.html',
  styleUrl: './sectionskills.component.sass'
})
export class SectionskillsComponent {
  listSkills = SKILLS;
}
