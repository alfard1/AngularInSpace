import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import {Pilot} from "../pilot";

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;
  @Output() selected = new EventEmitter<Pilot>();

  ngOnInit() {
    this.pilots.push(new Pilot('Bart Simpson', '/assets/pilot1.jpg'));
    this.pilots.push(new Pilot('Homer Simpson', '/assets/pilot2.jpg'));
    this.pilots.push(new Pilot('Lisa Simpson', '/assets/pilot3.jpg'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(this.selectedPilot);
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }
}
