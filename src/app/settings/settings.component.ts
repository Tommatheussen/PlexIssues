import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  public settingsForm: FormGroup;

  constructor(
    private settingsService: SettingsService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.settingsForm = this._fb.group({
      plexhost: [''],
      plexport: [''],
      username: [''],
      password: ['']
    });

    this.getSettings();
  }

  getSettings(): void {
    console.log(this.settingsForm);
    this.settingsService.getSettings()
      .subscribe(settings => this.settingsForm.patchValue(settings));
  }
}