import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent,LayoutComponent,SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = "namee"
  constructor(){
    console.log('AppComponent constructor');
  }
}
