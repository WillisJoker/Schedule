import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScheduleComponent } from './component/schedule/schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScheduleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'class_schedule';
}
