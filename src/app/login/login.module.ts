
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { PlexIssuesSharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    PlexIssuesSharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
