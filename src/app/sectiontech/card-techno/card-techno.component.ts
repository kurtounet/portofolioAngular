import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-techno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-techno.component.html',
  styleUrl: './card-techno.component.sass'
})
export class CardTechnoComponent {
  @Input() techno: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.techno.title);
  }

}
