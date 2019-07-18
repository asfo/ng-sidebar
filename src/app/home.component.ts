import { Component } from '@angular/core';

import { SidebarService } from './sidebar/sidebar.service';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public sidebarService: SidebarService
  ) { }
}
