import { NgModule } from '@angular/core';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdOptionModule,
  MdSelectModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdFormFieldModule,
    MdIconModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule,
    MdToolbarModule
  ],
  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdFormFieldModule,
    MdIconModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule,
    MdToolbarModule
  ]
})
export class PlexIssuesMaterialModule { }
