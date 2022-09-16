import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { Student } from '../shared/interface/student.interface';
import { StudentServiceService } from '../student-service.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  selectedStudent!:Student
  constructor(public loggerService:LoggerService,public studentService:StudentServiceService) { }
  studentData!:Student[]
  ngOnInit(): void {
    this.getDetails()
  }
  
  viewDetails(data:Student){
    this.selectedStudent=data
    this.loggerService.log(data)
  }

  getDetails(){
    this.studentData=this.studentService.fetchStudent()
  }
}
