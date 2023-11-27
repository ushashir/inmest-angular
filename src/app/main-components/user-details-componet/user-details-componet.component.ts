import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details-componet',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user-details-componet.component.html',
  styleUrl: './user-details-componet.component.scss'
})
export class UserDetailsComponetComponent implements OnInit{
  userId =''
   constructor(private route: ActivatedRoute){

   }
  ngOnInit(): void {
    this.route.queryParams.subscribe(param=>{
      console.log(param['id'])
      this.userId = param['id']
    })
  }
}
