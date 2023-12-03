import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from '../top-nav/top-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,SideNavComponent, RouterOutlet, TopNavComponent,SideNavComponent, MatSidenavModule],
  templateUrl: './layout.component.html',
  animations: [] ,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
