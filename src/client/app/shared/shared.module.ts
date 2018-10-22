import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PlexIssuesMaterialModule } from './material.module';

import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [TruncatePipe],
  imports: [CommonModule, FormsModule, FlexLayoutModule, ReactiveFormsModule, PlexIssuesMaterialModule],
  exports: [CommonModule, FormsModule, FlexLayoutModule, ReactiveFormsModule, TruncatePipe, PlexIssuesMaterialModule]
})
export class PlexIssuesSharedModule {}
