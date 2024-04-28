import { Component, Input } from '@angular/core';
//import { ModelJob } from './models/ModelJob.models';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-card-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-job.component.html',
  styleUrl: './card-job.component.sass'
})
export class CardJobComponent {
  @Input() job?: any;





  url: string = "../assets/imgs/logo-technologies/angular.png";
  isSkillsVisible: boolean = false;
  toggleVisibility() {
    this.isSkillsVisible = !this.isSkillsVisible;
  }

}
