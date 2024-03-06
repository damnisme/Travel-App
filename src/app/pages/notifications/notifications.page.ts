import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage {

  notifications: string[] = [
    'New notification 1',
    'New notification 2',
    'New notification 3'
  ];

  constructor() {}

}
