import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLinkActive],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

}
