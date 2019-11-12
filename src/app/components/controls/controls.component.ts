import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() currentSettings;
  constructor() { }

  ngOnInit() {
  }

}
