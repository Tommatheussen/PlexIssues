import { NgModule } from '@angular/core';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';

import { PlexIssuesSharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SetupRoutingModule,
    PlexIssuesSharedModule
  ],
  declarations: [
    SetupComponent
  ]
})
export class SetupModule { }
