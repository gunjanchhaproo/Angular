import { Injectable } from '@angular/core';
import { Student } from './shared/interface/student.interface';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  
  constructor() { }
  log(value:any){
    console.log("Logger Service Chla")
    console.log(value)
  }


}
