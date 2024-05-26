import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../service/schedule.service';
import { CommonModule } from '@angular/common';
interface Class {
  classname: string;
  start_time: string;
  end_time: string;
  week: number;
}
@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  schedule: Class[] = [];
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  times: string[] = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data;
    });
  }

  getClass(day: number, time: string): string {
    for (let c of this.schedule) {
      if (c.week === day && this.isTimeInRange(time, c.start_time, c.end_time)) {
        return c.classname;
      }
    }
    return '';
  }

  isTimeInRange(time: string, start: string, end: string): boolean {
    return time >= start && time <= end;
  }

}
