import { Component } from '@angular/core';

export interface Student {
  studentNo: number;
  name: string;
  email: string;
  present: boolean;
}

@Component({
  selector: 'app-attendance-list',
  templateUrl: '../attendance-list/attendance-list.component.html',
  styleUrls: ['../attendance-list/attendance-list.component.scss'],
})
export class AttendanceListComponent {
  displayedColumns: string[] = ['studentNo', 'name', 'email', 'status'];

  students: Student[] = [
    { studentNo: 1, name: 'Nkwi Loh', email: 'loh.nkwi@meltwater.org', present: true },
    // Add other students similarly...
    { studentNo: 51, name: 'Student 51', email: 'student51@example.com', present: false },
  ];
}
