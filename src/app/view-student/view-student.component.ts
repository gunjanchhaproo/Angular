import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../shared/interface/student.interface';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  @Input() ss!:Student
  constructor() { }

  ngOnInit(): void {
  }

}
