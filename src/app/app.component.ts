import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionLandingComponent } from './section-landing/section-landing.component';
import { SectionsjobsComponent } from './sectionsjobs/sectionsjobs.component';
import { SectionprojectComponent } from './sectionproject/sectionproject.component';
import { SectionskillsComponent } from './sectionskills/sectionskills.component';
import { SectiontechComponent } from './sectiontech/sectiontech.component';
import { SectionformComponent } from './sectionform/sectionform.component';
import { CardprojectComponent } from './sectionproject/cardproject/cardproject.component';
import { ModelJob } from './models/ModelJob.models';
import { CardSkillsComponent } from './sectionskills/card-skills/card-skills.component';
import { CardTechnoComponent } from './sectiontech/card-techno/card-techno.component';
declare var particlesJS: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    SectionLandingComponent,
    SectionsjobsComponent,
    SectionskillsComponent,
    SectiontechComponent,
    SectionformComponent,
    FooterComponent,
    CardprojectComponent,
    SectionprojectComponent,
    CardTechnoComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Portofolio d\' Anthony Bossut';

  constructor() {

    console.log("start");

  }
  ngOnInit(): void {
    particlesJS.load("particles-js", "assets/particlesjs-config.json", null);
  }
}
