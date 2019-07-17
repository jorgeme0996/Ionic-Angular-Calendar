import { Component, OnInit, ViewChild } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarWeekends = true;

  timeZone: "America/Mexico_City"

  calendarPlugins: any[] = [
    dayGridPlugin, 
    timeGridPlugin, 
    listPlugin, 
    interactionPlugin
  ];

  calendarHeader = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  }

  calendarEvents: EventInput[] = [
    {"start": "2019-07-19", "title": "APR 19", "duration": "02:00"},
    {"start": "2019-07-01", "title": "APR FOOLS"},
    {"start": "2019-07-19", "title": "TAX TIME"},
    {"start": "2019-07-19", "title": "DOCE"}
  ];

  constructor() { }

  ngOnInit() {}


  handleDateClick(event){
    console.log(event);
  }

  handleEventClick(event) {
    console.log(event);
  }

  handleEventDragStop(event) {
    console.log(event);
  }

  handleEventResize(event) {
    console.log(event);
  }

  handleEventDrop(event) {
    console.log(event);
  }

}
