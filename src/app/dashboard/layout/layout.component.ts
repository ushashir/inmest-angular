import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,SideNavComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
