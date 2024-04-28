import { Component, Input } from '@angular/core';
import { ModelSkill } from '../../models/ModelSkill.models';

@Component({
  selector: 'app-card-skills',
  standalone: true,
  imports: [],
  templateUrl: './card-skills.component.html',
  styleUrl: './card-skills.component.sass'
})
export class CardSkillsComponent {
  @Input() skills?: any;
}
