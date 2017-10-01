import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FlexLayoutModule
} from '@angular/flex-layout';

import { PlexIssuesMaterialModule } from './material.module';

@NgModule({
  imports: [
    PlexIssuesMaterialModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    PlexIssuesMaterialModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class PlexIssuesSharedModule { }
