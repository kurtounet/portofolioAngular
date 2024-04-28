import { Component } from '@angular/core';
import { DataService } from '../data/data.service';
import { CommonModule } from '@angular/common';
import { CardTechnoComponent } from '../sectiontech/card-techno/card-techno.component';
import { TECHNO } from '../data/data.techno';
@Component({
  selector: 'app-sectiontech',
  standalone: true,
  imports: [CommonModule, CardTechnoComponent],
  templateUrl: './sectiontech.component.html',
  styleUrl: './sectiontech.component.sass'
})
export class SectiontechComponent {
  listTechno = TECHNO;

  constructor() { }

  ngOnInit(): void {
    console.log(this.listTechno);
  }

}
