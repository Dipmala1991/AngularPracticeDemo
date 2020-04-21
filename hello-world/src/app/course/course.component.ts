import { Component, OnInit } from '@angular/core';
import { CourseService} from '../course.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = 'List of courses:';
  courses;

  constructor(private service: CourseService) {
      this.courses = this.service.getCourses();
   }

  ngOnInit(): void {
  }

}
