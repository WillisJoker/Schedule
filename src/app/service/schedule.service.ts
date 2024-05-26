import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }
  getSchedule(): Observable<Class[]> {
    const schedule: Class[] = [
      { classname: 'Math', start_time: '08:00', end_time: '09:00', week: 1 },
      { classname: 'English', start_time: '09:00', end_time: '10:00', week: 2 },
    ];
    return of(schedule);
  }
}

interface Class {
  classname: string;
  start_time: string;
  end_time: string;
  week: number;
}