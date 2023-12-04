import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login/login.component';
import { SideNavComponent } from './app-core/common/side-nav/side-nav.component';
import { TopNavComponent } from "./app-core/common/top-nav/top-nav.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        FormsModule,
        LoginComponent,
        SideNavComponent,
        TopNavComponent,
    ]
})
export class AppComponent implements OnChanges, OnInit {
  title = 'inmest-web';
  @Input() name = 'Folasade';
  profiles = [
    {
      id: 1,
      first_name: 'Lucky',
      last_name: 'Dogbey',
    },

    {
      id: 2,
      first_name: 'Oyin',
      last_name: 'Lade',
    },

    {
      id: 3,
      first_name: 'Obehi',
      last_name: 'Ataga',
    },

    {
      id: 4,
      first_name: 'Precious',
      last_name: 'Deyemi',
    },
  ];

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(SimpleChange);

    for (const inputChanges in changes) {
      console.log(changes[inputChanges].currentValue, inputChanges);
    }
  }

  ngOnInit(): void {
    console.log('on Init');
  }
}
