import { Component, OnInit } from '@angular/core';

import { Issue } from './../issue';
import { SettingsService } from './../settings.service';

@Component({
  selector: 'plexissues-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {
  settings: {};

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings(): void {
    this.settingsService.getSettings()
      .subscribe(settings => this.settings = settings);
  }
}