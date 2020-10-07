import { Component, OnInit } from '@angular/core';
import {Pilot} from "../pilot";

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  ngOnInit() {
    this.pilots.push(new Pilot('Bart Simpson', '/assets/pilot1.jpg'));
    this.pilots.push(new Pilot('Homer Simpson', '/assets/pilot2.jpg'));
    this.pilots.push(new Pilot('Lisa Simpson', '/assets/pilot3.jpg'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }

}
