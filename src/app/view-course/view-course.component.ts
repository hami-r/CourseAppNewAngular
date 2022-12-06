import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
  constructor(private api:ApiService) {
    this.api.fetchCourse().subscribe(
      (response:any) => {
        this.courses=response
      }
    )
  } 
  
  courses:any = []
}
