import { Component } from '@angular/core';
import { RouterLink, Route } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  navbarOpen = false;

  openNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  closeNavbar() {
    this.navbarOpen = false;
  }
}
