import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private attendanceDb =[
    {
      "id": 1,
      "eit_id": "john.doe@meltwater.org",
      "reporting_time": "8:30am",
      "class": true,
      "number_of_times": 3,
      "image_url": ""
    },
    {
      "id": 2,
      "eit_id": "alice.smith@meltwater.org",
      "reporting_time": "9:00am",
      "class": false,
      "number_of_times": 1,
      "image_url": ""
    },
    {
      "id": 3,
      "eit_id": "bob.johnson@meltwater.org",
      "reporting_time": "8:45am",
      "class": true,
      "number_of_times": 5,
      "image_url": ""
    },
    {
      "id": 4,
      "eit_id": "emma.wilson@meltwater.org",
      "reporting_time": "9:15am",
      "class": true,
      "number_of_times": 0,
      "image_url": ""
    },
    {
      "id": 5,
      "eit_id": "samuel.roberts@meltwater.org",
      "reporting_time": "9:30am",
      "class": false,
      "number_of_times": 4,
      "image_url": ""
    },
    {
      "id": 6,
      "eit_id": "sarah.davis@meltwater.org",
      "reporting_time": "8:55am",
      "class": true,
      "number_of_times": 2,
      "image_url": ""
    },
    {
      "id": 7,
      "eit_id": "michael.thompson@meltwater.org",
      "reporting_time": "8:40am",
      "class": true,
      "number_of_times": 0,
      "image_url": ""
    },
    {
      "id": 8,
      "eit_id": "olivia.wilson@meltwater.org",
      "reporting_time": "9:20am",
      "class": false,
      "number_of_times": 3,
      "image_url": ""
    },
    {
      "id": 9,
      "eit_id": "benjamin.brown@meltwater.org",
      "reporting_time": "8:35am",
      "class": true,
      "number_of_times": 1,
      "image_url": ""
    },
    {
      "id": 10,
      "eit_id": "grace.thomas@meltwater.org",
      "reporting_time": "9:10am",
      "class": true,
      "number_of_times": 5,
      "image_url": "h"
    }
  ] 
  constructor() { }

  getAttendance() {
    return of(this.attendanceDb)
  }
}
