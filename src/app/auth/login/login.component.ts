import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnChanges{
  @Input() name = "Francois Mavunila"
  constructor(){
    console.log('LoginComponent constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

}
